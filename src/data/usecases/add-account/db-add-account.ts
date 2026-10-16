import type {
  AddAccount,
  AddAccountModel
} from '../../../domain/usecases/add-account'
import type { AccountModel } from '../../../domain/models/account'
import type { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  accountRepository: any

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    const password = await this.encrypter.encrypt(account.password)

    return {
      id: '1',
      name: account.name,
      email: account.email,
      password
    }
  }
}
