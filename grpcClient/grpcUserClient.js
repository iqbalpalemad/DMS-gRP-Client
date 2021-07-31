const grpc                  = require("grpc");
const protoLoader           = require("@grpc/proto-loader");


const grpcUserclient        = () => {
    const protoPath             = './protocolBuffers/User.proto';

    const userPackageDef        = protoLoader.loadSync(protoPath,{});
    const userGrpcObject        = grpc.loadPackageDefinition(userPackageDef);
    const userPackage           = userGrpcObject.userPackage;
    return  new userPackage.userService(process.env.GRPC_HOST , 
                                                grpc.credentials.createInsecure());
}


module.exports              = grpcUserclient;