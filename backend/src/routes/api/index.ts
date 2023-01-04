import { FastifyPluginAsync } from 'fastify';
import dataRoute from './data';

const api: FastifyPluginAsync = async (fastify) => {
  fastify.register(dataRoute, { prefix: '/data' });
};

export default api;
