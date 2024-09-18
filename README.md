---

# Banlang Interpreter

Welcome to the Banlang Interpreter! Banlang is a fun programming language with a Bengali-inspired syntax, designed to make coding more engaging. This README provides a comprehensive guide to the syntax and features supported by the interpreter.

## Table of Contents

1. [Introduction](#introduction)
2. [File Structure](#file-structure)
3. [Syntax Overview](#syntax-overview)
   - [Variables](#variables)
   - [Output](#output)
   - [Conditionals](#conditionals)
   - [Loops](#loops)
   - [Error Handling](#error-handling)
4. [Examples](#examples)
5. [Running the Interpreter](#running-the-interpreter)

## Introduction

Banlang is a language that uses a Bengali-inspired syntax to create a more intuitive programming experience. This interpreter converts Banlang code into JavaScript and executes it.

## Syntax Overview

### Variables

To define a variable, use `dhoro` followed by the variable name and value.

**Syntax:**
```ban
dhoro variable_name = value;
```

**Example:**
```ban
dhoro a = 10;
```

### Output

To display output to the console, use `dekhao`.

**Syntax:**
```ban
dekhao expression;
```

**Example:**
```ban
dekhao "Hello, World!";
```

### Conditionals

To use conditionals, use `jodi` for `if`, `othoba` for `else if`, and `ta na hole` for `else`.

**Syntax:**
```ban
jodi (condition) {
    // code to execute if condition is true
} othoba (another_condition) {
    // code to execute if the first condition is false and another_condition is true
} ta na hole {
    // code to execute if all conditions are false
}
```

**Example:**
```ban
jodi (a > b) {
    dekhao "a is greater than b";
} othoba (a < b) {
    dekhao "a is less than b";
} ta na hole {
    dekhao "a is equal to b";
}
```

### Loops

To create loops, use `jotokkhon na` for `while` and `thamo` for `break`.

**Syntax:**
```ban
jotokkhon na (condition) {
    // code to execute while condition is true
    thamo; // break out of the loop
}
```

**Example:**
```ban
jotokkhon na (a < 5) {
    dekhao a;
    a += 1;
}
```

### Error Handling

The interpreter provides custom error messages for syntax errors and other issues. If there is a problem with the Banlang code, the interpreter will output an error message.

**Example Error:**
```ban
dhoro a = 10
dekhao a;
```

**Expected Output:**
```
❌ Sofol hoyni, Kothao vul ache
Details: Unexpected token ';'
```

## Examples

### 1. Basic Variable Assignment and Output

**Code:**
```ban
shuru koro
    dhoro a = 10;
    dekhao a;
sesh koro
```

**Expected Output:**
```
Sofol hoyecho 🎉
10
```

### 2. Conditional Statements

**Code:**
```ban
shuru koro
    dhoro a = 15;
    dhoro b = 10;
    jodi (a > b) {
        dekhao "a is greater than b";
    } othoba (a < b) {
        dekhao "a is less than b";
    } ta na hole {
        dekhao "a is equal to b";
    }
sesh koro
```

**Expected Output:**
```
Sofol hoyecho 🎉
a is greater than b
```

### 3. Loop with Conditional Statements

**Code:**
```ban
shuru koro
    dhoro a = 0;
    jotokkhon na (a < 5) {
        dekhao a;
        a += 1;
    }
sesh koro
```

**Expected Output:**
```
Sofol hoyecho 🎉
0
1
2
3
4
```

### 4. Nested Conditions and Loops

**Code:**
```ban
shuru koro
    dhoro x = 0;
    jotokkhon na (x < 3) {
        dhoro y = 0;
        jotokkhon na (y < 2) {
            jodi (x > y) {
                dekhao "x: " + x + ", y: " + y;
            }
            y += 1;
        }
        x += 1;
    }
sesh koro
```

**Expected Output:**
```
Sofol hoyecho 🎉
x: 1, y: 0
x: 2, y: 0
x: 2, y: 1
```

### 5. Error Handling

**Code:**
```ban
shuru koro
    dhoro z = 10
    dekhao z;
sesh koro
```

**Expected Output:**
```
❌ Sofol hoyni, Kothao vul ache
Details: Unexpected token ';'
```

### 6. Complex Logic

**Code:**
```ban
shuru koro
    dhoro a = 5;
    dhoro b = 15;
    dhoro c = 20;
    jodi (a < b) {
        jodi (b < c) {
            dekhao "a is the smallest and c is the largest";
        } othoba (b == c) {
            dekhao "b and c are equal";
        }
    } othoba (a > b) {
        dekhao "a is greater than b";
    }
sesh koro
```

**Expected Output:**
```
Sofol hoyecho 🎉
a is the smallest and c is the largest
```

## Running the Interpreter

1. Save the Banlang code in a `.ban` file (e.g., `example.ban`).
2. Place the `.ban` file in the directory with your interpreter script.
3. Run the interpreter script with the `.ban` file as an argument:

   ```sh
   npx ts-node src/interpreter.ts test/test.ban


   or


   ./run.sh
   ```

Feel free to modify and extend the interpreter as needed. Enjoy coding in Banlang!

---
