# file-proxy

This is a prototype file proxy web server. Theory of operation:

By calling a GET REST API endpoint and giving a path that matches a Radicle Git repository, this web app will download the Git repository from a Radicle Seed node, and will serve the file to requester.

This is a quick and dirty prototype, to prove that the concept is possible. This code repository is forked from a this [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider) template.

## Example

Making a REST API call like this:

- `GET file/pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/add-1.0.0.tgz`

Will download the corresponding Git repository:

- `git clone pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy.git`

And it will return the `add-1.0.0.tgz` from that repository.

*Note:* The file requested must exist in the repositories root directory.

## License

[MIT](./LICENSE.md)
