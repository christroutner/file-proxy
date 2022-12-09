# file-proxy

This is a prototype file proxy web server. Theory of operation:

By calling a GET REST API endpoint and giving a path that matches a Radicle Git repository, this web app will download the Git repository from a Radicle Seed node, and will serve the file to requester.

This is a quick and dirty prototype, to prove that the concept is possible. This code repository is forked from a this [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider) template.

## Usage

Making a REST API call like this:

- `GET file/pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/add-1.0.0.tgz`

CURL example:

- `curl -H "Content-Type: application/json" -X GET localhost:5020/files/pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy/add-1.0.0.tgz`


Will download the corresponding Git repository:

- `git clone pine.radicle.garden/hnrkcahyaj8apybx4p4px5h4r1r4y1fu7t6fy.git`

And it will return the `add-1.0.0.tgz` from that repository.

*Note:* The file requested must exist in the repositories root directory.

## Installation
This code expects node.js v16+ to be installed on the host operating system.

- `git clone https://github.com/christroutner/file-proxy`
- `cd file-proxy`
- `npm install`
- `npm start`

## License

[MIT](./LICENSE.md)
