import { FastifyPluginAsync } from 'fastify';
import Joi from 'joi';
import TestService, { Data } from '@services/TestService';

const dataRoute: FastifyPluginAsync = async (fastify) => {
  const testService = TestService.getInstance();

  fastify.get('/', async (request, reply) => {
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(testService.getDatas());
  });

  fastify.post('/', async (request, reply) => {
    const schema = Joi.object<Data>({
      name: Joi.string().required(),
      result: Joi.object<Data['result']>({
        partA: Joi.array()
          .items(Joi.number().required(), Joi.number().required(), Joi.number().required(), Joi.number().required())
          .required(),
        partB: Joi.number().required(),
      }).required(),
    });

    const body = request.body as Data;

    const { error } = schema.validate(body);
    if (error) {
      reply.code(400).header('Content-Type', 'application/json; charset=utf-8').send(error);
      return;
    } else {
      testService.addData(body);
      reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(body);
    }
  });
};

export default dataRoute;
