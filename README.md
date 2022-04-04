
<p align="center">
  <a href="http://www.jhipster.tech/" rel="noopener" target="_blank">
    <img width="150" src="https://raw.githubusercontent.com/jhipster/jhipster.github.io/main/images/logo/logo-jhipster2x.png" alt="MUI logo">
  </a>
  <a href="https://mui.com/" rel="noopener" target="_blank">
    <img width="150" src="https://mui.com/static/logo.svg" alt="MUI logo">
  </a>
</p>

<h1 align="center">Jhipster - React - Material UI</h1>

Greetings, Java Hipster!

This is forked JHipster React utilities library to switch UI library to Material UI (from Reactstrap)

[![NPM version][npm-image]][npm-url]
[![Test & Build](https://github.com/wlminus/react-jhipster-mui/actions/workflows/ci.yml/badge.svg)](https://github.com/wlminus/react-jhipster-mui/actions/workflows/ci.yml)

---
# IMPORTANT CHANGE

### Pagination Component
Pagination component now using Materiai UI [Pagination Component](https://mui.com/components/pagination/). It supported all [props](https://mui.com/api/pagination/) of it and I made some change of JhiPagination's props.

* `activePage` is deleted, using `page` from mui component directly
* `onSelect: (page: number) => void;` is deleted, using `onChange: (event: React.ChangeEvent<unknown>, page: number) => void` from mui component directly
* `maxButtons` is deleted, mui component self manage how the page button show and it work like the previous reactstrap

```diff
export interface IJhiPaginationProps {
- activePage: number;
- onSelect: (page: number) => void;
- maxButtons: number;
  totalItems: number;
  itemsPerPage: number;
}
```

# REMARK
Jhipster design some validation form helper using react-hook-form and react strap, but it's little bit conflict with Material UI form component mindset, so I suggest to use Material UI form component with react-hook-form direactly but not from this lib.

---
Full documentation and information about jhipster is available on website at [http://www.jhipster.tech/](http://www.jhipster.tech/)

Please read our [guidelines](https://github.com/jhipster/generator-jhipster/CONTRIBUTING.md#submitting-an-issue) before submitting an issue. If your issue is a bug, please use the bug template pre populated [here](https://github.com/jhipster/generator-jhipster/issues/new). For feature requests and queries you can use [this template][feature-template].

[npm-image]: https://badge.fury.io/js/react-jhipster.svg
[npm-url]: https://npmjs.com/package/react-jhipster-mui

[feature-template]: https://github.com/jhipster/generator-jhipster/issues/new?body=*%20**Overview%20of%20the%20request**%0A%0A%3C!--%20what%20is%20the%20query%20or%20request%20--%3E%0A%0A*%20**Motivation%20for%20or%20Use%20Case**%20%0A%0A%3C!--%20explain%20why%20this%20is%20a%20required%20for%20you%20--%3E%0A%0A%0A*%20**Browsers%20and%20Operating%20System**%20%0A%0A%3C!--%20is%20this%20a%20problem%20with%20all%20browsers%20or%20only%20IE8%3F%20--%3E%0A%0A%0A*%20**Related%20issues**%20%0A%0A%3C!--%20has%20a%20similar%20issue%20been%20reported%20before%3F%20--%3E%0A%0A*%20**Suggest%20a%20Fix**%20%0A%0A%3C!--%20if%20you%20can%27t%20fix%20this%20yourself%2C%20perhaps%20you%20can%20point%20to%20what%20might%20be%0A%20%20causing%20the%20problem%20(line%20of%20code%20or%20commit)%20--%3E

## Development setup

You need NodeJS and NPM.

### Fork the react-jhipster project

Go to the [react-jhipster project](https://github.com/jhipster/react-jhipster) and click on the "fork" button. You can then clone your own fork of the project, and start working on it.

[Please read the Github forking documentation for more information](https://help.github.com/articles/fork-a-repo)

### Build

Run `npm install` to install all dependencies.

Make some changes, run `npm run test` to run both eslint and karma tests.

Package the library with `npm run build`.

### Set NPM to use the cloned project

In your cloned `react-jhipster` project, type `npm link`.

This will do a symbolic link from the global `node_modules` version to point to this folder.

For testing, you will want to integrate your version of `react-jhipster` into an application generated by JHipster.

Go to your application folder, run `npm link react-jhipster` so that the local version has a symbolic link to the development version of `react-jhipster`.

You should see your changes reflected in the application.

Another way is to run `npm pack` on react-jhipster and then do `npm install path-to/react-jhipster/react-jhipster-0.15.0.tgz` on the generated application. this is the most fool proof way to test if `npm link` doesn't work
