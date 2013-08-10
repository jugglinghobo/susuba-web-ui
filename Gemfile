# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'

gem "middleman", "~>3.1.4"
gem "middleman-sprockets", "~>3.1.4"
gem "sprockets-handlebars_template", :require => "sprockets/ember_handlebars_template"

# Live-reloading plugin
gem "middleman-ember", "~>0.2.0"
gem "middleman-livereload", "~> 3.1.0"

gem "json", "~>1.8.0"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem "ruby18_source_location"
end
