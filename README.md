koansys_sphinx_theme
====================

Sphinx theme for Koansys Projects
---------------------------------

This repository contains Sphinx themes for Koansys related projects.
To use a theme in your Sphinx documentation, follow this guide:

Add the below code to your `conf.py` file after running `sphinx-quickstart`:

    if 'sphinx-build' in ' '.join(sys.argv):  # protect against dumb importers
        from subprocess import call, Popen, PIPE

        p = Popen('which git', shell=True, stdout=PIPE)
        git = p.stdout.read().strip()
        cwd = os.getcwd()
        _themes = os.path.join(cwd, '_themes')

        if not os.path.isdir(_themes):
            call([git, 'clone', 'git@github.com:koansys/koansys_sphinx_theme.git', '_themes'])
        else:
            os.chdir(_themes)
            call([git, 'checkout', 'master'])
            call([git, 'pull'])
            os.chdir(cwd)
        sys.path.append(os.path.abspath('_themes'))

    html_theme_path = ['_themes']
    html_theme = 'koansys'

The following themes exist:
- **koansys** - the generic theme for Koansys projects.
- **koansys_default** - the generic theme for Koansys projects based off the default theme.


Installation for Development Purposes
-------------------------------------

    $ git clone git@github.com:koansys/koansys_sphinx_theme.git
    $ mkdir test_docs && cd test_docs
    $ virtualenv env
    $ source env/bin/activate
    $ pip install sphinx
    $ mkdir docs && cd docs
    $ sphinx-quickstart
    $ ln -s ../../koansys_sphinx_theme/ koansys_sphinx_theme

Add to your `conf.py` file (Line 94):

    sys.path.append(os.path.abspath('koansys_sphinx_theme'))
    html_theme_path = ['koansys_sphinx_theme']
    html_theme = 'koansys'

Now the `Quickstart` docs should be themed.

    $ make clean html
    $ open _build/html/index.html

Make changes in the `koansys_sphinx_theme` repo like normal, and changes should transfer over.

NOTE: `test_docs` is not the git repository.