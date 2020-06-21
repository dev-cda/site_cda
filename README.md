# CDA-website

## Install jekyll:

Before we install Jekyll, we need to make sure we 
have all the required dependencies.

```bash
sudo apt-get install ruby-full build-essential
```

 The following commands will add environment 
 variables to your `~/.bashrc` file to configure 
 the gem installation path. Run them now:


 ```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Finally, install Jekyll:

```
gem install jekyll bundler
```

## Run project

Install project dependencies.

```
bundle install
```

Run site:

```
bundle exec jekyll serve -l
```