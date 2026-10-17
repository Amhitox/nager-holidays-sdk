
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NagerHolidaysSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NagerHolidaysSDK.test()
    equal(testsdk instanceof NagerHolidaysSDK, true,
      'NagerHolidaysSDK.test() must return a client synchronously')
  })

})
