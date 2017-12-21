# eslint-config-gplane

This is shareable ESLint config created by [GPlane](https://github.com/g-plane).
It is used in GPlane's projects.

## Notice

This config uses `eslint-plugin-import` and `eslint-plugin-eslint-comments`,
so you should install those ESLint plugins if you use this config.

## Main Code Style

- No semi.
- 2 spaces indent.
- Single quote.
- No `var` keywords and prefer using `const`.

## Additional config

### Flow

You must install `babel-eslint` and `eslint-plugin-flowtype` first.

Edit your ESLint config like this:

```json
{
  "extends": ["gplane/flow"]
}
```

Note that you just need to extend `gplane/flow` so extending `gplane` is not needed.
(`gplane/flow` has extended `gplane` config.)

## Contributing

Welcome to sending PRs.
