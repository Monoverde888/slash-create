import * as Constants from './constants';
import * as Util from './util';
import API from './api';
import BitField from './util/bitfield';
import Command from './command';
import CommandContext from './context';
import Creator from './creator';
import RequestHandler from './util/requestHandler';
import SequentialBucket from './util/sequentialBucket';
import Server from './server';

import DiscordHTTPError from './errors/DiscordHTTPError';
import DiscordRESTError from './errors/DiscordRESTError';

import ExpressServer from './servers/express';
import FastifyServer from './servers/fastify';
import GatewayServer from './servers/gateway';

import Member from './structures/member';
import Message from './structures/message';
import Permissions from './structures/permissions';
import User from './structures/user';
import UserFlags from './structures/userFlags';

const VERSION: string = require('../package').version;
const CommandOptionType = Constants.CommandOptionType;

export {
  API,
  BitField,
  Command,
  CommandContext,
  CommandOptionType,
  Constants,
  Creator,
  DiscordHTTPError,
  DiscordRESTError,
  ExpressServer,
  FastifyServer,
  GatewayServer,
  Member,
  Message,
  Permissions,
  RequestHandler,
  SequentialBucket,
  Server,
  User,
  UserFlags,
  Util,
  VERSION
};