/*
  Use case for downloading a git repo from a Radicle seed node, and then serving
  a file from that repository.
*/

// Global npm libraries
// import clone from 'git-clone/promise.js'
import shell from 'shelljs'

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

      shell.exec(`git clone ${gitUrl}`)
      console.log('Git repo cloned.')

      // const result = await clone(gitUrl, './')
      // console.log('result: ', result)
    } catch (err) {
      console.error('Error in use-cases/file.js/getFile(): ', err)
      throw err
    }
  }
}

export default FileUseCase
