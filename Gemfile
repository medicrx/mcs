source "https://rubygems.org"

gem "jekyll"
gem "webrick"
gem 'dotenv', groups: [:development, :test]

# Jekyll plugins - ALL PRESERVED
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate"
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

gem 'kramdown-parser-gfm'

# Platform-specific gems
platforms :windows do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end


gem "wdm", platforms: :windows

gem "jekyll-theme-cayman"
gem "faraday-retry"
