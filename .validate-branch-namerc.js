module.exports = {
    pattern: '^(feat|fix|docs|perf|refactor)/[0-9]{6}/.+$',
    errorMsg:
      '🤨 La branche que tu essaies de pusher ne respecte pas nos conventions => "<(feat|fix|docs|perf|refactor)>/<numéro du ticket>/<short-description>", tu peux la renommer avec `git branch -m <nom-actuel> <nouveau-nom>`',
}