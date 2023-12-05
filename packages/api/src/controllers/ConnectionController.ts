import { Body, Get, JsonController, Param, Post } from 'routing-controllers'
import { Service } from 'typedi'

import { tractionRequest } from '../utils/traction'

interface connectionParams {
  my_label?: string
  image_url?: string
}

@JsonController('/connections')
@Service()
export class ConnectionController {
  @Get('/getConnectionStatus/:connId')
  public async getConnectionStatus(@Param('connId') connectionId: string) {
    const response = await tractionRequest.get(`/connections/${connectionId}`)
    return response.data
  }

  @Post('/createInvite')
  public async createConnectionInvite(@Body() params: connectionParams) {
    const response = await tractionRequest.post(`/connections/create-invitation`, params, {
      params: { auto_accept: true },
    })
    return response.data
  }
}
