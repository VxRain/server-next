import { applyDecorators } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ApiController } from '~/common/decorators/api-controller.decorator'
import { Auth } from '~/common/decorators/auth.decorator'

export function OptionController(name?: string, postfixRoute?: string) {
  const routes = ['options', 'config']
  return applyDecorators(
    Auth(),
    ApiController(
      postfixRoute
        ? routes.map((route) => `/${route}/${postfixRoute}`)
        : routes,
    ),
    ApiTags(`${name ? `${name} ` : ''}Option Routes`),
  )
}
