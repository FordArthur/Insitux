export const insituxVersion = 220306;
import { asBoo } from "./checks";
import { arityCheck, keyOpErr, numOpErr, typeCheck, typeErr } from "./checks";
import { makeEnclosure } from "./closure";
import { parse } from "./parse";
import * as pf from "./poly-fills";
const { abs, sign, sqrt, floor, ceil, round, max, min, logn, log2, log10 } = pf;
const { cos, sin, tan, acos, asin, atan, sinh, cosh, tanh } = pf;
const { concat, has, flat, push, reverse, slice, splice, sortBy } = pf;
const { ends, slen, starts, sub, subIdx, substr, upperCase, lowerCase } = pf;
const { trim, trimStart, trimEnd, charCode, codeChar, strIdx, replace } = pf;
const { getTimeMs, randInt, randNum } = pf;
const { isNum, len, objKeys, range, toNum, isArray } = pf;
import { doTests } from "./test";
import { assertUnreachable, Env, InvokeError, InvokeResult } from "./types";
import { ExternalFunctions, syntaxes } from "./types";
import { Ctx, Dict, ErrCtx, Func, Ins, Val, ops, typeNames } from "./types";
import { asArray, isEqual, num, str, stringify, val2str, vec } from "./val";
import { dic, dictDrop, dictGet, dictSet, toDict, pathSet } from "./val";
import { _boo, _num, _str, _key, _vec, _dic, _nul, _fun } from "./val";

let letsStack: { [key: string]: Val }[] = [];
let lets: typeof letsStack[0] = {};
let recurArgs: undefined | Val[];

type _Exception = { errors: InvokeError[] };
function _throw(errors: InvokeError[]): Val {
  throw <_Exception>{ errors };
}
function isThrown(e: unknown): e is _Exception {
  return !!e && typeof e === "object" && "errors" in e;
}
const throwTypeErr = (msg: string, errCtx: ErrCtx) =>
  _throw([typeErr(msg, errCtx)]);

async function exeOp<T>(
  op: string,
  args: Val[],
  ctx: Ctx<T>,
  errCtx: ErrCtx,
): Promise<Val> {
  switch (op) {
    case "str":
      return _str(stringify(args));
    case "print":
    case "print-str":
      ctx.print(stringify(args), op === "print");
      return _nul();
    case "vec":
      return _vec(args);
    case "dict":
      return toDict(args);
    case "len":
      return _num(
        args[0].t === "str"
          ? slen(args[0].v)
          : args[0].t === "vec"
          ? len(args[0].v)
          : len(dic(args[0]).keys),
      );
    case "to-num":
      if (isNum(args[0].v)) {
        return _num(toNum(args[0].v));
      } else {
        return _nul();
      }
    case "to-key":
      return _key(`:${val2str(args[0])}`);
    case "to-vec":
      return _vec(asArray(args[0]));
    case "!":
      return _boo(!asBoo(args[0]));
    case "=":
    case "!=":
      for (let i = 1, lim = len(args); i < lim; ++i) {
        if (isEqual(args[i - 1], args[i]) !== (op === "=")) {
          return _boo(false);
        }
      }
      return _boo(true);
    case "-":
      return _num(
        len(args) === 1
          ? -num(args[0])
          : args.map(num).reduce((sum, n) => sum - n),
      );
    case "**":
      return _num(num(args[0]) ** (len(args) === 1 ? 2 : num(args[1])));
    case "+":
      return _num(args.map(num).reduce((sum, n) => sum + n));
    case "*":
      return _num(args.map(num).reduce((sum, n) => sum * n));
    case "/":
      return _num(args.map(num).reduce((sum, n) => sum / n));
    case "//":
      return _num(args.map(num).reduce((sum, n) => floor(sum / n)));
    case "fast=":
    case "fast!=":
      return _boo(isEqual(args[0], args[1]) === (op === "fast="));
    case "fast-":
      return _num(<number>args[0].v - <number>args[1].v);
    case "fast+":
      return _num(<number>args[0].v + <number>args[1].v);
    case "fast*":
      return _num(<number>args[0].v * <number>args[1].v);
    case "fast/":
      return _num(<number>args[0].v / <number>args[1].v);
    case "fast//":
      return _num(floor(<number>args[0].v / <number>args[1].v));
    case "fast<":
      return _boo(<number>args[0].v < <number>args[1].v);
    case "fast>":
      return _boo(<number>args[0].v > <number>args[1].v);
    case "fast<=":
      return _boo(<number>args[0].v <= <number>args[1].v);
    case "fast>=":
      return _boo(<number>args[0].v >= <number>args[1].v);
    case "rem":
      return _num(args.map(num).reduce((sum, n) => sum % n));
    case "min":
      return _num(args.map(num).reduce((sum, n) => min(sum, n)));
    case "max":
      return _num(args.map(num).reduce((sum, n) => max(sum, n)));
    case "<":
    case ">":
    case "<=":
    case ">=":
      for (let i = 1, lim = len(args); i < lim; ++i) {
        const [a, b] = [<number>args[i - 1].v, <number>args[i].v];
        if (
          (op === "<" && a >= b) ||
          (op === ">" && a <= b) ||
          (op === "<=" && a > b) ||
          (op === ">=" && a < b)
        ) {
          return _boo(false);
        }
      }
      return _boo(true);
    case "inc":
      return _num(<number>args[0].v + 1);
    case "dec":
      return _num(<number>args[0].v - 1);
    case "abs":
      return _num(abs(<number>args[0].v));
    case "round":
      if (len(args) === 2) {
        const x = 10 ** <number>args[0].v;
        return _num(round(<number>args[1].v * x) / x);
      } else {
        return _num(round(<number>args[0].v));
      }
    case "sin":
    case "cos":
    case "tan":
    case "sqrt":
    case "floor":
    case "ceil":
    case "logn":
    case "log2":
    case "log10": {
      const f = { sin, cos, tan, sqrt, floor, ceil, logn, log2, log10 }[op];
      return _num(f(num(args[0])));
    }
    case "asin":
    case "acos":
    case "atan":
    case "sinh":
    case "cosh":
    case "tanh": {
      const f = { asin, acos, atan, sinh, cosh, tanh }[op];
      return _num(f(num(args[0])));
    }
    case "and":
      return _boo(args.every(asBoo));
    case "or":
      return _boo(args.some(asBoo));
    case "xor":
      if (asBoo(args[0]) !== asBoo(args[1])) {
        return asBoo(args[0]) ? args[0] : args[1];
      } else {
        return _boo(false);
      }
    case "&":
    case "|":
    case "^":
    case "<<":
    case ">>":
    case ">>>":
      const [a, b] = [num(args[0]), num(args[1])];
      return _num(
        op === "&"
          ? a & b
          : op === "|"
          ? a | b
          : op === "^"
          ? a ^ b
          : op === "<<"
          ? a << b
          : op === ">>"
          ? a >> b
          : a >>> b,
      );
    case "~":
      return _num(~num(args[0]));
    case "odd?":
    case "even?":
      return _boo(num(args[0]) % 2 === (op === "odd?" ? 1 : 0));
    case "pos?":
    case "neg?":
    case "zero?": {
      const n = num(args[0]);
      return _boo(op === "pos?" ? n > 0 : op === "neg?" ? n < 0 : !n);
    }
    case "null?":
    case "num?":
    case "bool?":
    case "str?":
    case "dict?":
    case "vec?":
    case "key?":
    case "func?":
    case "wild?":
    case "ext?": {
      const { t } = args[0];
      return _boo(
        (op === "func?" && (t === "func" || t === "clo")) ||
          substr(op, 0, slen(op) - 1) === t,
      );
    }
    case "type-of":
      return _str(args[0].t);
    case "substr?":
      return _boo(sub(str(args[1]), str(args[0])));
    case "idx": {
      let i = -1;
      if (args[0].t === "str") {
        if (args[1].t !== "str") {
          throwTypeErr("strings can only contain strings", errCtx);
        } else {
          i = subIdx(args[1].v, args[0].v);
        }
      } else if (args[0].t === "vec") {
        i = args[0].v.findIndex(a => isEqual(a, args[1]));
      }
      if (i === -1) {
        return _nul();
      } else {
        return _num(i);
      }
    }
    case "set-at": {
      const [pathVal, replacement, coll] = args;
      return pathSet(vec(pathVal), replacement, coll);
    }
    case "map":
    case "for":
    case "reduce":
    case "filter":
    case "remove":
    case "find":
    case "count": {
      const closure = getExe(ctx, args.shift()!, errCtx);
      if (op === "map" || op === "for") {
        const badArg = args.findIndex(
          ({ t }) => t !== "vec" && t !== "str" && t !== "dict",
        );
        if (badArg !== -1) {
          const badType = typeNames[args[badArg].t];
          throwTypeErr(
            `argument ${
              badArg + 2
            } must be either: string, vector, dictionary, not ${badType}`,
            errCtx,
          );
        }
      }

      if (op === "for") {
        const arrays = args.map(asArray);
        const lims = arrays.map(len);
        const divisors = lims.map((_, i) =>
          slice(lims, 0, i + 1).reduce((sum, l) => sum * l),
        );
        divisors.unshift(1);
        const lim = divisors.pop()!;
        if (lim > ctx.loopBudget) {
          _throw([{ e: "Budget", m: "would exceed loop budget", errCtx }]);
        }
        const array: Val[] = [];
        for (let t = 0; t < lim; ++t) {
          const argIdxs = divisors.map((d, i) => floor((t / d) % lims[i]));
          array.push(await closure(arrays.map((a, i) => a[argIdxs[i]])));
        }
        return _vec(array);
      }

      if (op === "map") {
        const arrays = args.map(asArray);
        const shortest = min(...arrays.map(len));
        const array: Val[] = [];
        for (let i = 0; i < shortest; ++i) {
          array.push(await closure(arrays.map(a => a[i])));
        }
        return _vec(array);
      }

      if (op !== "reduce") {
        const arrArg = args.shift()!;
        const array = asArray(arrArg);
        const isRemove = op === "remove",
          isFind = op === "find",
          isCount = op === "count";
        const filtered: Val[] = [];
        let count = 0;
        for (let i = 0, lim = len(array); i < lim; ++i) {
          const b = asBoo(await closure([array[i], ...args]));
          if (isCount) {
            count += b ? 1 : 0;
          } else if (isFind) {
            if (b) {
              return array[i];
            }
          } else if (b !== isRemove) {
            filtered.push(array[i]);
          }
        }
        switch (op) {
          case "count":
            return _num(count);
          case "find":
            return _nul();
        }
        if (arrArg.t === "str") {
          return _str(filtered.map(v => val2str(v)).join(""));
        } else if (arrArg.t === "dict") {
          return toDict(flat(filtered.map(v => <Val[]>v.v)));
        } else {
          return _vec(filtered);
        }
      }
      const arrayVal = args.pop()!;
      if (!has(["vec", "dict", "str"], arrayVal.t)) {
        throwTypeErr(
          `must reduce either: string, vector, dictionary, not ${
            typeNames[arrayVal.t]
          }`,
          errCtx,
        );
      }
      const array = asArray(arrayVal);

      if (!len(array)) {
        if (len(args)) {
          return args[0];
        } else {
          return _vec();
        }
      }
      if (len(array) < 2 && !len(args)) {
        return array[0];
      }

      let reduction: Val = (len(args) ? args : array).shift()!;
      for (let i = 0, lim = len(array); i < lim; ++i) {
        reduction = await closure([reduction, array[i]]);
      }
      return reduction;
    }
    case "repeat": {
      const toRepeat = args.shift()!;
      const result: Val[] = [];
      const count = num(args[0]);
      if (count > ctx.rangeBudget) {
        _throw([{ e: "Budget", m: "would exceed range budget", errCtx }]);
      }
      ctx.rangeBudget -= count;
      if (toRepeat.t === "func" || toRepeat.t === "clo") {
        const closure = getExe(ctx, toRepeat, errCtx);
        for (let i = 0; i < count; ++i) {
          result.push(await closure([_num(i)]));
        }
      } else {
        for (let i = 0; i < count; ++i) {
          result.push(toRepeat);
        }
      }
      return _vec(result);
    }
    case "->": {
      let passed = args.shift()!;
      for (let i = 0, lim = len(args); i < lim; ++i) {
        try {
          passed = await getExe(ctx, args[i], errCtx)([passed]);
        } catch (e) {
          if (isThrown(e)) {
            e.errors.forEach(err => (err.m = `-> arg ${i + 2}: ${err.m}`));
            throw e;
          }
        }
      }
      return passed;
    }
    case "rand-int":
    case "rand": {
      const nArgs = len(args);
      const [a, b] = [
        nArgs < 2 ? 0 : num(args[0]),
        nArgs === 0
          ? 1 + toNum(op === "rand-int")
          : nArgs === 1
          ? num(args[0])
          : num(args[1]),
      ];
      return _num(op === "rand-int" ? randInt(a, b) : randNum(a, b));
    }
    case "do":
    case "val":
      return op === "do" ? args.pop()! : args.shift()!;
    case ".":
    case "..":
    case "...": {
      const closure = getExe(ctx, args.shift()!, errCtx);
      if (op === ".") {
        return closure(args);
      }
      let flatArgs: Val[] = args;
      if (op === "..") {
        flatArgs = flat(args.map(a => (a.t === "vec" ? a.v : [a])));
      } else {
        const a = flatArgs.pop()!;
        push(flatArgs, flat([a.t === "vec" ? a.v : [a]]));
      }
      return closure(flatArgs);
    }
    case "into": {
      if (args[0].t === "vec") {
        return _vec(concat(args[0].v, asArray(args[1])));
      } else {
        if (args[1].t === "vec") {
          return toDict(concat(flat(asArray(args[0]).map(vec)), args[1].v));
        } else {
          const { keys: ks1, vals: vs1 } = dic(args[0]);
          const { keys: ks2, vals: vs2 } = dic(args[1]);
          return _dic({ keys: concat(ks1, ks2), vals: concat(vs1, vs2) });
        }
      }
    }
    case "omit":
      return dictDrop(dic(args[1]), args[0]);
    case "assoc":
      return _dic(dictSet(dic(args[2]), args[0], args[1]));
    case "append":
      return _vec(concat(vec(args[1]), [args[0]]));
    case "prepend":
      return _vec(concat([args[0]], vec(args[1])));
    case "insert": {
      const v = vec(args[2]);
      let n = num(args[1]);
      if (n === 0) {
        return _vec(concat([args[0]], v));
      } else if (n === -1) {
        return _vec(concat(v, [args[0]]));
      } else {
        n = n > 0 ? min(n, len(v)) : max(len(v) + 1 + n, 0);
        return _vec(concat(concat(slice(v, 0, n), [args[0]]), slice(v, n)));
      }
    }
    case "sect": {
      const v = args[0];
      const vlen = v.t === "vec" ? len(v.v) : slen(str(v));
      let a = 0,
        b = vlen;
      switch (len(args)) {
        case 1:
          a = 1;
          break;
        case 2: {
          const del = num(args[1]);
          if (del < 0) {
            b += del;
          } else {
            a += del;
          }
          break;
        }
        case 3: {
          const skip = num(args[1]);
          const take = num(args[2]);
          a = skip < 0 ? vlen + skip + (take < 0 ? take : 0) : a + skip;
          b = (take < 0 ? b : a) + take;
          break;
        }
      }
      a = max(a, 0);
      b = min(b, vlen);
      if (a > b) {
        return (v.t === "vec" ? _vec : _str)();
      }
      if (v.t === "vec") {
        return _vec(slice(v.v, a, b));
      } else {
        return _str(substr(str(args[0]), a, b - a));
      }
    }
    case "reverse":
      if (args[0].t === "str") {
        return _str(stringify(reverse(asArray(args[0]))));
      } else {
        return _vec(reverse(asArray(args[0])));
      }
    case "flatten": {
      const src = vec(args[0]);
      const flattened: Val[] = [];
      const recur = (vec: Val[]): void =>
        vec.forEach(v => (v.t === "vec" ? recur(v.v) : flattened.push(v)));
      recur(src);
      return _vec(flattened);
    }
    case "shuffle": {
      const arr = slice(vec(args[0]));
      for (let i = len(arr) - 1; i; --i) {
        const j = floor(randInt(0, i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return _vec(arr);
    }
    case "sort":
    case "sort-by": {
      const src = asArray(args[op === "sort" ? 0 : 1]);
      if (!len(src)) {
        return _vec();
      }
      const mapped: Val[][] = [];
      if (op === "sort") {
        push(
          mapped,
          src.map(v => [v, v]),
        );
      } else {
        const closure = getExe(ctx, args[0], errCtx);
        for (let i = 0, lim = len(src); i < lim; ++i) {
          mapped.push([src[i], await closure([src[i]])]);
        }
      }
      const okT = mapped[0][1].t;
      if (mapped.some(([_, { t }]) => t !== okT || !has(["num", "str"], t))) {
        throwTypeErr("can only sort by all number or all string", errCtx);
      }
      if (okT === "num") {
        sortBy(mapped, ([x, a], [y, b]) => (num(a) > num(b) ? 1 : -1));
      } else {
        sortBy(mapped, ([x, a], [y, b]) => (str(a) > str(b) ? 1 : -1));
      }
      return _vec(mapped.map(([v]) => v));
    }
    case "group-by": {
      const closure = getExe(ctx, args[0], errCtx);
      const groups: Dict = { keys: [], vals: [] };
      const isDic = args[1].t === "dict";
      if (isDic) {
        const { keys, vals } = dic(args[1]);
        for (let i = 0, lim = len(keys); i < lim; ++i) {
          const v = await closure([keys[i], vals[i]]);
          const existingKey = groups.keys.findIndex(k => isEqual(k, v));
          if (existingKey === -1) {
            groups.keys.push(v);
            groups.vals.push(_dic({ keys: [keys[i]], vals: [vals[i]] }));
          } else {
            const subDict = dic(groups.vals[existingKey]);
            subDict.keys.push(keys[i]);
            subDict.vals.push(vals[i]);
          }
        }
      } else {
        const src = asArray(args[1]);
        for (let i = 0, lim = len(src); i < lim; ++i) {
          const v = await closure([src[i]]);
          const existingKey = groups.keys.findIndex(k => isEqual(k, v));
          if (existingKey === -1) {
            groups.keys.push(v);
            groups.vals.push(_vec([src[i]]));
          } else {
            const subVec = vec(groups.vals[existingKey]);
            subVec.push(src[i]);
          }
        }
      }
      return _dic(groups);
    }
    case "part-by": {
      const closure = getExe(ctx, args[0], errCtx);
      const isDic = args[1].t === "dict";
      if (isDic) {
        const { keys, vals } = dic(args[1]);
        const parted: Dict[] = [
          { keys: [], vals: [] },
          { keys: [], vals: [] },
        ];
        for (let i = 0, lim = len(keys); i < lim; ++i) {
          const p = asBoo(await closure([keys[i], vals[i]])) ? 0 : 1;
          parted[p].keys.push(keys[i]);
          parted[p].vals.push(vals[i]);
        }
        return _vec(parted.map(_dic));
      } else {
        const src = asArray(args[1]);
        const parted: Val[][] = [[], []];
        for (let i = 0, lim = len(src); i < lim; ++i) {
          parted[asBoo(await closure([src[i]])) ? 0 : 1].push(src[i]);
        }
        return _vec(parted.map(_vec));
      }
    }
    case "frequencies": {
      const src = asArray(args[0]);
      const distinct: Val[] = [];
      const counts: number[] = [];
      src.forEach(x => {
        const i = distinct.findIndex(y => isEqual(x, y));
        if (i !== -1) {
          ++counts[i];
        } else {
          distinct.push(x);
          counts.push(1);
        }
      });
      return _dic({ keys: distinct, vals: counts.map(_num) });
    }
    case "distinct": {
      const arr = len(args) === 1 && args[0].t === "vec" ? vec(args[0]) : args;
      const distinct: Val[] = [];
      arr.forEach(a => {
        if (!distinct.some(v => isEqual(a, v))) {
          distinct.push(a);
        }
      });
      return _vec(distinct);
    }
    case "range": {
      const [a, b, s] = args.map(num);
      const edgeCase = s && s < 0 && a < b; //e.g. 1 4 -1
      const [x, y] =
        len(args) > 1 ? (edgeCase ? [b - 1, a - 1] : [a, b]) : [0, a];
      const step = sign((y - x) * (s || 1)) * (s || 1);
      const count = ceil(abs((y - x) / step));
      if (!count) {
        return _vec();
      }
      if (count > ctx.rangeBudget) {
        _throw([{ e: "Budget", m: "would exceed range budget", errCtx }]);
      }
      ctx.rangeBudget -= count;
      const nums = range(count).map(n => n * step + x);
      return _vec(nums.map(_num));
    }
    case "empty?":
      return _boo(!len(asArray(args[0])));
    case "keys":
    case "vals":
      return _vec(dic(args[0])[op === "keys" ? "keys" : "vals"]);
    case "split":
      return _vec(str(args[1]).split(str(args[0])).map(_str));
    case "join":
      return _str(asArray(args[1]).map(val2str).join(str(args[0])));
    case "replace":
      return _str(replace(str(args[2]), str(args[0]), str(args[1])));
    case "starts?":
    case "ends?":
      return _boo(
        (op === "starts?" ? starts : ends)(str(args[1]), str(args[0])),
      );
    case "upper-case":
    case "lower-case":
    case "trim":
    case "trim-start":
    case "trim-end":
      return _str(
        (op === "upper-case"
          ? upperCase
          : op === "lower-case"
          ? lowerCase
          : op === "trim"
          ? trim
          : op === "trim-start"
          ? trimStart
          : trimEnd)(str(args[0])),
      );
    case "str*": {
      const text = str(args[0]);
      return _str(
        range(max(ceil(num(args[1])), 0))
          .map(n => text)
          .join(""),
      );
    }
    case "char-code": {
      if (args[0].t === "str") {
        const n = len(args) > 1 ? num(args[1]) : 0;
        const s = str(args[0]);
        if (slen(s) <= n || n < 0) {
          return _nul();
        } else {
          return _num(charCode(strIdx(s, n)));
        }
      } else {
        return _str(codeChar(num(args[0])));
      }
    }
    case "time":
      return _num(getTimeMs());
    case "version":
      return _num(insituxVersion);
    case "tests": {
      const summaries = await doTests(invoke, !(len(args) && asBoo(args[0])));
      return _str(summaries.join("\n"));
    }
    case "symbols":
      return _vec(symbols(ctx.env, false).map(_str));
    case "eval": {
      delete ctx.env.funcs["entry"];
      const invokeId = `${errCtx.invokeId} eval`;
      try {
        const valOrNone = await parseAndExe(ctx, str(args[0]), invokeId, []);
        return valOrNone ? valOrNone : _nul();
      } catch (e) {
        if (isThrown(e)) {
          _throw([
            { e: "Eval", m: "error within evaluated code", errCtx },
            ...e.errors,
          ]);
        }
      }
    }
    case "about": {
      const func = str(args[0]);
      const entry = ops[func];
      if (!entry) {
        return _nul();
      }
      const infos: Val[] = [];
      const info = (what: string, val: Val) =>
        infos.push(_key(`:${what}`), val);
      const toStrVec = (v: (string | string[])[]): Val =>
        _vec(v.map(typ => (isArray(typ) ? _vec(typ.map(_str)) : _str(typ))));
      info("external?", _boo(!!entry.external));
      if (entry.exactArity) {
        info("exact-arity", _num(entry.exactArity));
      } else {
        if (entry.minArity) {
          info("minimum-arity", _num(entry.minArity));
        }
        if (entry.maxArity) {
          info("maximum-arity", _num(entry.maxArity));
        }
      }
      if (entry.params || entry.numeric) {
        info("in-types", toStrVec(entry.params ? entry.params : ["num"]));
      }
      if (entry.returns || entry.numeric === true) {
        info("out-types", toStrVec(entry.returns ? entry.returns : ["num"]));
      }
      return toDict(infos);
    }
    case "recur":
      recurArgs = args;
      return _nul();
    case "reset":
      ctx.env.vars = {};
      ctx.env.funcs = {};
      letsStack = [];
      return _nul();
  }

  return _throw([{ e: "Unexpected", m: "operation doesn't exist", errCtx }]);
}

const monoArityError = (t: Val["t"], errCtx: ErrCtx) => [
  {
    e: "Arity",
    m: `${typeNames[t]} as op requires one sole argument`,
    errCtx,
  },
];

function checks(op: string, args: Val[], errCtx: ErrCtx, checkArity: boolean) {
  //Optional arity check
  if (checkArity) {
    const violations = arityCheck(op, len(args), errCtx);
    if (violations) {
      return violations;
    }
  }
  //Argument type check
  const types = args.map(a => [a.t]);
  const violations = typeCheck(op, types, errCtx);
  return violations ? violations : false;
}

function getExe<T>(
  ctx: Ctx<T>,
  op: Val,
  errCtx: ErrCtx,
  checkArity = true,
): (params: Val[]) => Promise<Val> {
  if (op.t === "str" || op.t === "func") {
    const name = op.v;
    if (ops[name]) {
      if (ops[name].external) {
        return async (params: Val[]) => {
          const violations = checks(name, params, errCtx, checkArity);
          if (violations) {
            _throw(violations);
          }
          const valOrErr = await ctx.functions[name].handler(params, ctx);
          if (valOrErr.kind === "err") {
            return _throw([{ e: "External", m: valOrErr.err, errCtx }]);
          }
          return valOrErr.value;
        };
      }
      return async (params: Val[]) => {
        const violations = checks(name, params, errCtx, checkArity);
        if (violations) {
          _throw(violations);
        }
        return await exeOp(name, params, ctx, errCtx);
      };
    }
    if (name in ctx.env.funcs && name !== "entry") {
      return async (params: Val[]) =>
        await exeFunc(ctx, ctx.env.funcs[name], params);
    }
    if (name in ctx.env.vars) {
      return getExe(ctx, ctx.env.vars[name], errCtx);
    }
    if (name in lets) {
      return getExe(ctx, lets[name], errCtx);
    }
    if (starts(name, "$")) {
      return async (params: Val[]) => {
        if (!len(params)) {
          _throw(monoArityError(op.t, errCtx));
        }
        if (!ctx.set) {
          const m = `"set" feature not implemented on this platform`;
          return _throw([{ e: "External", m, errCtx }]);
        }
        const err = ctx.set(substr(name, 1), params[0]);
        if (err) {
          _throw([{ e: "External", m: err, errCtx }]);
        }
        return params[0];
      };
    }
    return async (params: Val[]) => {
      if (!ctx.exe) {
        const m = `operation "${name}" does not exist"`;
        return _throw([{ e: "External", m, errCtx }]);
      }
      const valAndErr = ctx.exe(name, params);
      if (valAndErr.kind === "val") {
        return valAndErr.value;
      }
      return _throw([{ e: "External", m: valAndErr.err, errCtx }]);
    };
  } else if (op.t === "clo") {
    return (params: Val[]) => exeFunc(ctx, op.v, params);
  } else if (op.t === "key") {
    return async (params: Val[]) => {
      if (!len(params)) {
        _throw(monoArityError(op.t, errCtx));
      }
      if (params[0].t === "dict") {
        return dictGet(dic(params[0]), op);
      } else if (params[0].t === "vec") {
        const found = vec(params[0]).find(v => isEqual(v, op));
        return found ?? _nul();
      } else {
        return _throw(keyOpErr(errCtx, [params[0].t]));
      }
    };
  } else if (op.t === "num") {
    const n = floor(op.v);
    return async (params: Val[]) => {
      if (!len(params)) {
        _throw(monoArityError(op.t, errCtx));
      }
      const a = params[0];
      if (a.t !== "str" && a.t !== "vec" && a.t !== "dict") {
        return _throw(numOpErr(errCtx, [a.t]));
      }
      const arr = asArray(a),
        alen = len(arr);
      if ((n >= 0 && n >= alen) || (n < 0 && -n > alen)) {
        return _nul();
      } else if (n < 0) {
        return arr[alen + n];
      }
      return arr[n];
    };
  } else if (op.t === "vec") {
    const { v } = op;
    return async (params: Val[]) => {
      if (!len(params)) {
        _throw(monoArityError(op.t, errCtx));
      }
      const found = v.find(val => isEqual(val, params[0]));
      return found ?? _nul();
    };
  } else if (op.t === "dict") {
    const dict = op.v;
    return async (params: Val[]) => {
      if (len(params) === 1) {
        return dictGet(dict, params[0]);
      } else if (len(params) === 2) {
        return _dic(dictSet(dict, params[0], params[1]));
      }
      return _throw([
        { e: "Arity", m: "provide 1 or 2 arguments for dictionary", errCtx },
      ]);
    };
  } else if (op.t === "bool") {
    const cond = op.v;
    return async (params: Val[]) => {
      if (!len(params) || len(params) > 2) {
        return _throw([
          { e: "Arity", m: "provide 1 or 2 arguments for boolean", errCtx },
        ]);
      }
      return cond ? params[0] : len(params) > 1 ? params[1] : _nul();
    };
  }
  return async _ =>
    _throw([
      { e: "Operation", m: `${val2str(op)} is an invalid operation`, errCtx },
    ]);
}

function errorsToDict(errors: InvokeError[]) {
  const newKey = (d: Dict, k: string, v: Val) => dictSet(d, _key(k), v);
  return errors.map(({ e, m, errCtx }) => {
    let dict = newKey({ keys: [], vals: [] }, ":e", _str(e));
    dict = newKey(dict, ":m", _str(m));
    dict = newKey(dict, ":line", _num(errCtx.line));
    dict = newKey(dict, ":col", _num(errCtx.col));
    return _dic(dict);
  });
}

function destruct(args: Val[], shape: number[]): Val {
  let arr: Val[] = args;
  for (let a = 0, b = len(shape) - 1; a < b; ++a) {
    const val = arr[shape[a]];
    if (val.t === "vec") {
      arr = val.v;
    } else if (val.t === "str" && a + 1 === b && shape[a + 1] < slen(val.v)) {
      return _str(strIdx(val.v, shape[a + 1]));
    } else {
      return _nul();
    }
  }
  const pos = shape[len(shape) - 1];
  return pos >= len(arr) ? _nul() : arr[pos];
}

async function exeFunc<T>(
  ctx: Ctx<T>,
  func: Func,
  args: Val[],
  closureDeref = false,
): Promise<Val> {
  --ctx.callBudget;
  if (!closureDeref) {
    letsStack.push({});
    lets = letsStack[len(letsStack) - 1];
  }
  const stack: Val[] = [];
  for (let i = 0, lim = len(func.ins); i < lim; ++i) {
    const ins = func.ins[i];
    const { errCtx } = func.ins[i];

    const tooManyLoops = ctx.loopBudget < 1;
    if (tooManyLoops || ctx.callBudget < 1) {
      _throw([
        {
          e: "Budget",
          m: `${tooManyLoops ? "looped" : "called"} too many times`,
          errCtx,
        },
      ]);
    }

    switch (ins.typ) {
      case "val":
        stack.push(ins.value);
        break;
      case "var":
        ctx.env.vars[ins.value] = stack[len(stack) - 1];
        break;
      case "let":
        lets[ins.value] = stack[len(stack) - 1];
        break;
      case "dle":
      case "dva": {
        const val = stack.pop()!;
        let last: Val | undefined;
        ins.value.forEach(({ name, position }) => {
          if (ins.typ === "dva") {
            last = ctx.env.vars[name] = destruct([val], position);
          } else {
            last = lets[name] = destruct([val], position);
          }
        });
        stack.push(last!);
        break;
      }
      case "npa":
      case "upa": {
        const paramIdx = ins.value;
        if (paramIdx === -1) {
          stack.push(_vec(args));
        } else if (len(args) <= paramIdx) {
          stack.push(_nul());
        } else {
          stack.push(args[paramIdx]);
        }
        break;
      }
      case "dpa":
        stack.push(destruct(args, ins.value));
        break;
      case "ref": {
        const name = ins.value;
        if (ops[name]) {
          stack.push(_fun(name));
        } else if (starts(name, "$")) {
          if (!ctx.get) {
            const m = `"get" feature not implemented on this platform`;
            return _throw([{ e: "External", m, errCtx }]);
          }
          const valAndErr = ctx.get(substr(name, 1));
          if (valAndErr.kind === "err") {
            return _throw([{ e: "External", m: valAndErr.err, errCtx }]);
          }
          stack.push(valAndErr.value);
        } else if (name in ctx.env.vars) {
          stack.push(ctx.env.vars[name]);
        } else if (name in lets) {
          stack.push(lets[name]);
        } else if (name in ctx.env.funcs) {
          stack.push(_fun(name));
        } else {
          _throw([{ e: "Reference", m: `"${name}" did not exist`, errCtx }]);
        }
        break;
      }
      case "exa":
      case "exe": {
        const op = stack.pop()!;
        const closure = getExe(ctx, op, errCtx, ins.typ === "exa");
        const nArgs = ins.value;
        const params = splice(stack, len(stack) - nArgs, nArgs);
        try {
          stack.push(await closure(params));
        } catch (e) {
          if (isThrown(e)) {
            //Find next catch statement
            const nextCat = slice(func.ins, i).findIndex(
              ins => ins.typ === "cat",
            );
            if (nextCat !== -1) {
              i += nextCat;
              lets["errors"] = _vec(errorsToDict(e.errors));
              break;
            }
          }
          throw e;
        }
        if (recurArgs) {
          letsStack[len(letsStack) - 1] = {};
          i = -1;
          args = recurArgs;
          recurArgs = undefined;
          --ctx.recurBudget;
          if (!ctx.recurBudget) {
            _throw([{ e: "Budget", m: `recurred too many times`, errCtx }]);
          }
        }
        break;
      }
      case "or":
        if (asBoo(stack[len(stack) - 1])) {
          i += ins.value;
        } else {
          stack.pop();
        }
        break;
      case "mat": {
        const a = stack[len(stack) - 2];
        if (!isEqual(a, stack.pop()!)) {
          i += ins.value;
        } else {
          stack.pop();
        }
        break;
      }
      case "if":
        if (!asBoo(stack.pop()!)) {
          i += ins.value;
        }
        break;
      case "jmp":
      case "cat":
        i += ins.value;
        break;
      case "loo":
        i += ins.value;
        --ctx.loopBudget;
        break;
      case "pop":
        if (ins.value === 1) {
          stack.pop();
        } else {
          splice(stack, len(stack) - ins.value, ins.value);
        }
        break;
      case "ret":
        if (!ins.value) {
          stack.push(_nul());
        }
        i = lim;
        break;
      case "clo": {
        //Ensure any in-scope declarations are captured here
        const derefIns = slice(ins.value.derefs).map(ins => {
          const decl =
            ins.typ === "val" &&
            ins.value.t === "str" &&
            (lets[ins.value.v] ?? ctx.env.vars[ins.value.v]);
          return decl ? <Ins>{ typ: "val", value: decl } : ins;
        });
        //Dereference closure captures
        const captures = <Val[]>(
          (await exeFunc(ctx, { ins: derefIns }, args, true)).v
        );
        //Enclose the closure with dereferenced values
        const cins = slice(func.ins, i + 1, i + 1 + ins.value.length);
        stack.push({ t: "clo", v: makeEnclosure(ins.value, cins, captures) });
        i += ins.value.length;
        break;
      }
      default:
        assertUnreachable(ins);
    }
  }
  if (closureDeref) {
    return _vec(stack);
  } else {
    letsStack.pop();
    lets = letsStack[len(letsStack) - 1];
  }
  return stack[len(stack) - 1];
}

async function parseAndExe<T>(
  ctx: Ctx<T>,
  code: string,
  invokeId: string,
  params: Val[],
): Promise<Val | undefined> {
  const parsed = parse(code, invokeId);
  if (len(parsed.errors)) {
    _throw(parsed.errors);
  }
  ctx.env.funcs = { ...ctx.env.funcs, ...parsed.funcs };
  if (!("entry" in ctx.env.funcs)) {
    return;
  }
  return await exeFunc(ctx, ctx.env.funcs["entry"], params);
}

function ingestExternalOperations<T>(functions: ExternalFunctions<T>) {
  Object.keys(functions).forEach(name => {
    if (ops[name] && !ops[name].external) {
      throw "Redefining internal operations is disallowed.";
    }
    ops[name] = { ...functions[name].definition, external: true };
  });
}

function removeExternalOperations<T>(functions: ExternalFunctions<T>) {
  Object.keys(functions).forEach(name => {
    delete ops[name];
  });
}

async function innerInvoke<T>(
  ctx: Ctx<T>,
  closure: () => Promise<Val | undefined>,
  printResult: boolean,
): Promise<InvokeResult> {
  const { callBudget, loopBudget, recurBudget, rangeBudget } = ctx;
  ingestExternalOperations(ctx.functions);
  let errors: InvokeError[] = [];
  let value: Val | undefined;
  try {
    value = await closure();
  } catch (e) {
    if (isThrown(e)) {
      errors = e.errors;
    } else {
      throw e;
    }
  }
  removeExternalOperations(ctx.functions);
  [ctx.callBudget, ctx.recurBudget] = [callBudget, recurBudget];
  [ctx.loopBudget, ctx.rangeBudget] = [loopBudget, rangeBudget];
  delete ctx.env.funcs["entry"];
  letsStack = [];
  if (len(errors)) {
    return { kind: "errors", errors };
  }
  if (printResult && value) {
    ctx.print(val2str(value), true);
  }
  return value ? { kind: "val", value } : { kind: "empty" };
}

/**
 * Parses and executes the given code.
 * @param ctx An environment context you retain.
 * @param code The code to parse and execute.
 * @param invokeId A unique ID referenced in invocation errors.
 * @param printResult Automatically print the final value of this invocation?
 * @returns Invocation errors caused during execution of the code,
 * or the final value of the invocation.
 */
export async function invoke<T>(
  ctx: Ctx<T>,
  code: string,
  invokeId: string,
  printResult = false,
  params: Val[] = [],
): Promise<InvokeResult> {
  return await innerInvoke(
    ctx,
    async () => await parseAndExe(ctx, code, invokeId, params),
    printResult,
  );
}

/**
 * Executes a user-defined Insitux function by name.
 * @param ctx An environment context you retain.
 * @param funcName The function to execute.
 * @param params The parameters to pass to the function.
 * @param printResult Automatically print the final value of this invocation?
 * @returns Invocation errors caused during execution of the function,
 * or the final value of the invocation,
 * or undefined if the function was not found.
 */
export async function invokeFunction(
  ctx: Ctx,
  funcName: string,
  params: Val[],
  printResult = false,
): Promise<InvokeResult | undefined> {
  if (!(funcName in ctx.env.funcs)) {
    return;
  }
  return await innerInvoke(
    ctx,
    async () => await exeFunc(ctx, ctx.env.funcs[funcName], params),
    printResult,
  );
}

/**
 * @param env An environment context you retain.
 * @param alsoSyntax To optionally include syntax symbols.
 * @returns List of symbols defined in Insitux, including built-in operations,
 * (optionally) syntax, constants, and user-defined functions.
 */
export function symbols(env: Env, alsoSyntax = true): string[] {
  let syms: string[] = [];
  if (alsoSyntax) {
    push(syms, syntaxes);
  }
  push(syms, ["args", "PI", "E"]);
  syms = concat(syms, objKeys(ops));
  syms = concat(syms, objKeys(env.funcs));
  syms = concat(syms, objKeys(env.vars));
  const hidden = ["entry"];
  syms = syms.filter(o => !has(hidden, o));
  return sortBy(syms, (a, b) => (a > b ? 1 : -1));
}
