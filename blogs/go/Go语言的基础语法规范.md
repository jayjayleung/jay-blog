---
title: Go语言的基础语法规范
date: 2022-10-31
tags: 
 - go
categories: 
 - go
contact: go
---



## Golang文件名

所有的`go`源码都是以 `.go` 结尾。



## 行分隔符

在 `Go` 程序中，一行代表一个语句结束。每个语句不需要像` C 家族`中的其它语言一样以分号` ;` 结尾，因为这些工作都将由 `Go 编译器`自动完成。

如果你打算将多个语句写在同一行，它们则必须使用` ; `人为区分，但在实际开发中我们并不鼓励这种做法。

以下为两个语句：

```go
fmt.Println("Hello, World!")
fmt.Println("Hello GO")
```



## 注释

注释不会被编译，每一个包应该有相关注释。

单行注释是最常见的注释形式，你可以在任何地方使用以 // 开头的单行注释。多行注释也叫块注释，均已以 /* 开头，并以 */ 结尾。如：



## Go语言声明

有四种主要声明方式：

```
    var（声明变量）, const（声明常量）, type（声明类型） ,func（声明函数）。
```

Go的程序是保存在多个`.go`文件中，文件的第一行就是`package XXX`声明，用来说明该文件属于哪个包`(package)`，`package`声明下来就是`import`声明，再下来是类型，变量，常量，函数的声明。



## Go语言命名

#### Go的函数、变量、常量、自定义类型、包`(package)`的命名方式

遵循以下规则：

> - 首字符可以是任意的Unicode字符或者下划线
> - 剩余字符可以是Unicode字符、下划线、数字
> - 字符长度不限

#### Go只有25个关键字

```
    break        default      func         interface    select
    case         defer        go           map          struct
    chan         else         goto         package      switch
    const        fallthrough  if           range        type
    continue     for          import       return       var
```

#### Go还有37个保留字

```
    Constants:    true  false  iota  nil

    Types:    int  int8  int16  int32  int64  
              uint  uint8  uint16  uint32  uint64  uintptr
              float32  float64  complex128  complex64
              bool  byte  rune  string  error

    Functions:   make  len  cap  new  append  copy  close  delete
                 complex  real  imag
                 panic  recover
```

#### 可见性

- 声明在函数内部，是函数的本地值，类似private
- 声明在函数外部，是对当前包可见(包内所有.go文件都可见)的全局值，类似protect
- 声明在函数外部且首字母大写是所有包可见的全局值,类似public





