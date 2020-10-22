import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import user, { IUser } from '../shared/user.model';
import connect from '../shared/connect';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  connect();

  await user.find({}, function(err, result) {
    if (err) throw err;
    context.res = {
      body: result
    }
  });

};

export default httpTrigger;