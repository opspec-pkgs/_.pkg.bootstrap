[![Build Status](https://travis-ci.org/opspec-pkgs/_.op.bootstrap.svg?branch=master)](https://travis-ci.org/opspec-pkgs/_.op.bootstrap)

# Problem statement

Internal op for [opspec-pkgs/maintainers](https://github.com/orgs/opspec-pkgs/teams/maintainers) 
applied to ops (new & existing) to "bootstrap" them w/ latest standards & ops.

includes:
- generation of `README.md` (from op.yml)
- generation of `.opspec` directory
- generation of `.gitignore` file
- generation of `.travis.yml` file
- generation of `CODEOWNERS` file


# Format

this version of the op is in [![opspec 0.1.6](https://img.shields.io/badge/opspec-0.1.6-brightgreen.svg?colorA=6b6b6b&colorB=fc16be)](https://opspec.io/0.1.6) op definition format

# Example usage

## Install

```shell
opctl op install github.com/opspec-pkgs/_.op.bootstrap#2.0.0
```

## Run

```
opctl run github.com/opspec-pkgs/_.op.bootstrap#2.0.0
```

## Compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/_.op.bootstrap#1.0.0 }
  inputs:
    # params w/ default
    srcDir:
  outputs:
    srcDir:
```

# Support

join us on
[![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or
[open an issue](https://github.com/opspec-pkgs/_.pkg.bootstrap/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/master/CONTRIBUTING.md)
