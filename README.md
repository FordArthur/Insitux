# Insitux

A basic s-expression programming language.  
Try its REPL [here](https://insitux.phunanon.repl.co/).

## Usage

Like any programming language it is written down as _code_. Insitux takes your
code and follows it like complex instructions.  
You and the Insitux app talk to each other in these ways:

| what   | direction of data        | example                       |
| ------ | ------------------------ | ----------------------------- |
| code   | goes into the app        | `(+ 2 2)`                     |
| return | comes out of the app     | `4`                           |
| get    | reads data               | `$day.cycle_speed`            |
| set    | writes data              | `($day.cycle_speed 100)`      |
| exe    | data goes both in an out | `(util.fire [0 0 0] [0 1 0])` |

### Writing the code

Most code is written as _expressions_ like `(+ 2 2)`. As you can see, values are
separated by spaces within the parentheses, and the operation you want to
perform is the first value. Expressions can nest within one another, for
example:  
`(+ 2 (- 10 2) 2)`  
which is like the arithmetic expression `2 + (10 - 2) + 2`. Letting Insitux run
this code would return the value `12`.  
There are many built-in operations such as for arithmetic, manipulating text,
making lists, causing things to happen, etc. You can also write your own custom
operations called _functions_. An example:

```clj
(function say-hello name
  (print-line "Hello, " name "!"))
```

If you first enter this into the app, then `(say-hello "Patrick")`, it would
print to the screen a line saying `Hello, Patrick!`

### Built-in operations

Remember, each operation goes at the beginning of the expression in parentheses.
Each value separated by spaces are called _arguments_. Below is a list of
built-in operations each within an example.

```clj
;Prints a line of text, joining its arguments together
(print-line "2 + 2 = " (+ 2 2))
2 + 2 = 4

;Prints text without a line after it
(print "Hello, ")
(print "world!")
Hello, world!

;Defines a variable for later use
(define my-number 123)
(print-line my-number)
123

;Various arithmetic operators, which except for `inc` and `dec` accept a variable number of arguments
(+ 1 1 1)     3
(- 10 5 1)    4
(* 10 10 10)  1000
(/ 10 3)      3.333333
(inc 100)     101
(dec 50)      49

;Various equality operators, which all accept a variable number of arguments
;Note: < > <= >= only compare numbers
;Note: != will only check that each value is different from the next
(= 10 10)     true
(!= 1 2 1)    true
(< 1 2 3)     true
(> 10 5)      true
(<= 10 10 15) true
(>= 10 11 11) false

;Returns the length of a string of text or a vector
(print (len "Hello!") " ")
(print (len [0 1 2]))
6 3

;Concatenates strings of text together, also displaying numbers and vectors as text too
(str "Hello, " "world! Welcome " 2 " my app. " [:a :b :c])
Hello, world! Welcome 2 my app. [:a :b :c]

;Whole numbers can be used to retrieve characters from a string of text or items from a vector
;Note: the first letter/item is 0, the second is 1, etc
(2 "Hello!")    l
(2 [:a :b :c])  :c
```

"vec", "map", "reduce"
