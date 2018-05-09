function isPkgInstalled(pkg) {
  try {
    require.resolve(pkg)
    return true
  } catch (error) {
    return false
  }
}

module.exports = {
  isPkgInstalled
}
