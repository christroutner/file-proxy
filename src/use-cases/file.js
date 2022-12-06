/*
  Use case for downloading a git repo from a Radicle seed node, and then serving
  a file from that repository.
*/

// Global npm libraries
// import clone from 'git-clone/promise.js'
import shell from 'shelljs'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

class FileUseCase {
  constructor (localConfig = {}) {
    // console.log('User localConfig: ', localConfig)
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating File Use Cases library.'
      )
    }

    // Encapsulate dependencies
    // this.UserEntity = new UserEntity()
    // this.UserModel = this.adapters.localdb.Users
  }

  // Download a code repository and serve a specific file from it.
  async getFile (params) {
    try {
      const { seedUrl, urn, filename } = params
      console.log('filename: ', filename)

      const gitUrl = `http://${seedUrl}/${urn}.git`
      console.log(`gitUrl: ${gitUrl}`)

      const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
      const repoPath = `${__dirname}../../repos/`

      shell.cd(repoPath)
      shell.exec(`git clone ${gitUrl}`)
      console.log('Git repo cloned.')

      console.log('__dirname: ', __dirname)

      // Path to the desired file.
      // const filePath = `${__dirname}../../repos/${urn}/${filename}`
      const filePath = `${urn}/${filename}`
      console.log('filePath 1: ', filePath)

      return filePath

      // const result = await clone(gitUrl, './')
      // console.log('result: ', result)
    } catch (err) {
      console.error('Error in use-cases/file.js/getFile(): ', err)
      throw err
    }
  }
}

export default FileUseCase
