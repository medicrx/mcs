# MedicalCheatSheets (MCS)

A simple static [Jekyll](https://jekyllrb.com/) blog about medical pathologies, with short posts or articles. The blog is written in **French** and articles are added gradually. The blog includes a progressive web app (pwa) functionality for offline reading (working on it):

- Data is pre-cached in the browser using [workbox](https://developers.google.com/web/tools/workbox/).
- Updating to get latest articles can be done when network is available (online)
- The app can be installed via the browser prompt.
- if any problem is faced when installing or updating just **clean your browser cache** and retry

Any contribution will be possible when license is added.

## Usage

- `git clone` the repository
- Install the dependencies with `bundle install`
- Run the server with `bundle exec Jekyll serve`
- `bundle exec jekyll build` to build the project

The server will make the project available at: `http://127.0.0.1:4000/mcs/`

**Important note**: As this is not a regular Jekyll setup but using `github-pages`plugin instead,
you might have conflicts issues with your ruby version and the plugin versions (gh-pages now supports Ruby 3.x). Here is a workaround:

- Use a ruby version manager (I chose [rbenv](https://github.com/rbenv/rbenv))
- Switch to `ruby 3.0.2` (or your installed version) for this project
- If you used rbenv too make sure you have the latest version or at least latest version
of `ruby-build` (to avoid an `OpenSSl` version conflict too *sigh)

The blog is deployed on [Github Pages](https://pages.github.com/) using a github action workflow. The workflow is available in the `.github/workflows/jekyll.yml` folder. Also this project uses many jekyll plugins as dependencies and you can check the `Gemfile` for the list of plugins used. The most important ones are:

- [github-metadata](https://github.com/jekyll/github-metadata) for github pages
- [spaceship](https://github.com/jeffreytse/jekyll-spaceship) for tables, formulas, and other markdown enhancements
- [Premonition](https://github.com/lazee/premonition) for nice looking alerts
- [glossary-tooltips](https://github.com/erikw/jekyll-glossary_tooltip) for glossary tooltips


## File structure
- `_posts`: contains the articles (markdown files) and the folder structure is used to create the menu
- `_data`: contains the data files (yaml, json, etc.) used for the blog (categories, tags, etc.)
- `_includes`: contains the jekyll includes (header, footer, etc.)
- `_layouts`: contains the jekyll layouts (default, post, etc.)
- `_sass`: contains the scss files for the stylesheets
- `assets`: contains the assets (images, css, js, etc.)
- `index.markdown`: the index page (home page)
- `about.markdown`: the about page (about the blog)
- `cheatsheets.markdown`: the cheatsheets page (list of articles)
- `_config.yml`: the jekyll configuration file (contains the site settings, plugins, etc.)
- `Gemfile`: the gemfile for the project (contains the dependencies and plugins used)



## Contributing

If you want to contribute to this project check the [CONTRIBUTING](CONTRIBUTING.md) file for more information. You can also check the [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) file for the code of conduct.
- [LICENSE: CC NC 4.0](LICENSE)
