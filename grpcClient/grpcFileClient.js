const grpc                  = require("grpc");
const protoLoader           = require("@grpc/proto-loader");


const grpcfileclient        = () => {
    const protoPath             = './protocolBuffers/File.proto';

    const filePackageDef       = protoLoader.loadSync(protoPath,{});
    const fileGrpcObject       = grpc.loadPackageDefinition(filePackageDef);
    const filePackage          = fileGrpcObject.filePackage;
    return  new filePackage.fileService(process.env.GRPC_HOST , 
                                                grpc.credentials.createInsecure());
}


module.exports              = grpcfileclient;