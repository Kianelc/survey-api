import type {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter
} from './db-add-account-protocols'

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
