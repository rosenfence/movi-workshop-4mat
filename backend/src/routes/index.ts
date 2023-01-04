import { FastifyPluginAsync } from 'fastify';
import 'module-alias/register';
import api from './api';

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(api, { prefix: '/api' });
};

export default routes;
