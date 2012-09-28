koansys_sphinx_theme
====================

Sphinx theme for Koansys Projects

This repository contains Pylons themes for Pylons related projects.
To use a theme in your Sphinx documentation, follow this guide:

1. Put this directory as _themes into your docs folder.  
   *Alternatively you can also use git submodules to check out the contents there.*
2. Add this to your `conf.py` file:
    
        sys.path.append(os.path.abspath('_themes'))
        html_theme_path = ['_themes']
        html_theme = 'koansys'

The following themes exist:
- **koansys** - the generic theme for Koansys projects.
