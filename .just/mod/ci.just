piper := 'TTY=0 piper -p piper.cue' + if env("DEBUG", "0") == '1' { ' --log-level=debug' } else { '' }

import './web.just'

ci: bootstrap build-all test-web

pub:
    bunx --bun @morlay/bunpublish
