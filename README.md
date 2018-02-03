# Angular installation

## Tutorial
[On Youtube](https://www.youtube.com/watch?v=DlkR2n4SMMk)

## Commands
1. Install `npm`: `$ sudo pacman -S npm`
2. Change `npm` default directory (permissions issue):

```sh
$ mkdir ~/.node_modules
$ npm config set prefix ~/.node_modules
$ echo 'export PATH=~/.node_modules/bin:PATH' >>  ~/.bashrc
$ source ~/.bashrc
$ ng
```

2. Install `angular-cli`: `npm install -g @angular/cli`
3. Install `rxjs`: `npm install -g rxjs`
4. Create a new project: `ng new <project-name>`
5. Run the server: `ng serve`
6. Create a new component: `ng generate component <component-name>`
7. Create a new service: `ng generate service <service-name>`
8. Install `angular-material` (User Interface): `npm install @angular/material @angular/cdk @angular/animations`
9. Install `angulatics2` (Google Analytics): `npm install angulartics2`
10. Install `flex-layout` (Responsiveness): `npm install @angular/flex-layout`
11. Install `ngx-sharebuttons` (Share on social media): `npm install @ngx-share/core @ngx-share/button font-awesome`
12. Install `ngx-highlightjs` (Code syntax highlighting): `npm install ngx-highlightjs`
13. Install `ngx-page-scroll` (Scroll to content): `npm install ngx-page-scroll`

# Installation of this repo

Just replace the `/src` folder using the content of this repo

# Deploy app to server

```sh
$ ng build --prod --deploy-url=/
```

And a `dist` folder will be created at the root of the project, where its static files will be served from `/expenses`.

# Using SCSS instead of CSS

`SCSS` is more suitable to customize the themes of `Material` than `CSS`. According to [this tutorial](https://scotch.io/tutorials/using-sass-with-the-angular-cli), to switch to `SCSS`:

```sh
$ ng set defaults.styleExt scss
```

If you get an error related to `Node-sass`, the following command might fix it:

```sh
$ npm rebuild node-sass
```

Afterwards you need to reference the correct styles file in `.angular-cli.json`:

```scss
"styles": [
  "sass/styles.scss"
],
```
