source "https://rubygems.org"

# Use GitHub Pages gem
gem "github-pages", group: :jekyll_plugins

# Development gems
gem 'dotenv', groups: [:development, :test]

# Core dependencies (updated safely)
gem 'jekyll-paginate'
gem 'kramdown-parser-gfm' # Updated kramdown parser (GitHub uses this)
# Removed pygments.rb - GitHub Pages uses rouge by default now

# Jekyll plugins - ALL PRESERVED
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-pwa-workbox"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-glossary_tooltip"
  gem "jekyll-spaceship"
  gem "premonition"
  gem "jekyll-target-blank"
  gem "jekyll-github-metadata"
  # gem "jekyll_picture_tag" # Uncomment if needed
end

# Platform-specific gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Web server
gem "webrick", "~> 1.7"

# HTTP client
gem 'faraday-retry'
