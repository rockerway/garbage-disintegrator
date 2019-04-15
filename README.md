# garbage-disintegrator [![Build Status](https://travis-ci.org/rockerway/garbage-disintegrator.svg?branch=master)](https://travis-ci.org/rockerway/garbage-disintegrator)

scan text file or string, found target with Regex.

- [Prerequisites](#prerequisites)
- [Installing the CLI](#installing-the-cli)
- [Commands](#commands)

## Prerequisites

Certain operations require [Node.js](https://nodejs.org) to be locally installed on a client.

Before proceeding, install Node.js on your computer. See the official [Installing Node.js](https://nodejs.org/en/download/package-manager/) to learn how to install Node.js on your computer.

## Installing the CLI

```shell
$ npm i -g garbage-disintegrator
/usr/local/bin/rr -> /usr/local/lib/node_modules/garbage-disintegrator/bin/remove-repeated-string
+ garbage-disintegrator@0.0.3
added 9 packages from 5 contributors in 1.434s
```

## Commands

remove redundant (rr)

`rr <regexp> [content] [options]`

> **content**, **--stdin** or **--file** need to choose one to use.

### Arguments

- `regexp` : Target's [regular expression](https://en.wikipedia.org/wiki/Regular_expression) without options
- `content (option)` : Input data to be parsed

### Options

- `-v, --version` : output the version number
- `-f --file <path>` : Source from file path
- `--stdin` : Source from standard input
- `-o --out <path>` : Output to a file
- `-r --repeated` : Allow duplicate content
- `-c --conjunction <conjunction>` : Use to connect target string
- `-h, --help` : output usage information
