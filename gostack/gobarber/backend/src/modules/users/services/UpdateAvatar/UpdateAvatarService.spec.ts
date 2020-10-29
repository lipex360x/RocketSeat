import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import FakeStorageFiles from '@shared/container/providers/StorageFiles/fakes/FakeStorageFiles'
import FakeEncrypt from '@modules/users/providers/Encrypt/fakes/FakeEncrypt'
import CreateUserService from '@modules/users/services/CreateUser/CreateUserService'
import UpdateAvatarService from './UpdateAvatarService'
import AppError from '@shared/errors/AppError'

let fakeUsersRepository: FakeUsersRepository
let fakeEncrypt: FakeEncrypt
let createUserService: CreateUserService
let fakeStorageFiles: FakeStorageFiles
let updateAvatarService: UpdateAvatarService

describe('UpdateAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeStorageFiles = new FakeStorageFiles()
    fakeEncrypt = new FakeEncrypt()
    createUserService = new CreateUserService(fakeUsersRepository, fakeEncrypt)
    updateAvatarService = new UpdateAvatarService(fakeUsersRepository, fakeStorageFiles)
  })

  it('shoud be able to update the user avatar', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })

    await updateAvatarService.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg'
    })

    expect(user.avatar).toBe('avatar.jpg')
  })

  it('shoud not be able to update a non-existing user', async () => {
    expect(updateAvatarService.execute({
      user_id: 'non-existing',
      avatarFilename: 'avatar.jpg'
    })).rejects.toBeInstanceOf(AppError)
  })

  it('shoud be able to delete old user avatar version', async () => {
    const deleteFile = jest.spyOn(fakeStorageFiles, 'deleteFile')

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })

    await updateAvatarService.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg'
    })

    await updateAvatarService.execute({
      user_id: user.id,
      avatarFilename: 'avatar2.jpg'
    })

    expect(deleteFile).toHaveBeenCalledWith({ file: 'avatar.jpg' })
    expect(user.avatar).toBe('avatar2.jpg')
  })
})
