const grpc                  = require("grpc");
const protoLoader           = require("@grpc/proto-loader");


const grpcFolderclient        = () => {
    const protoPath             = './protocolBuffers/Folder.proto';

    const folderPackageDef        = protoLoader.loadSync(protoPath,{});
    const folderGrpcObject       = grpc.loadPackageDefinition(folderPackageDef);
    const folderPackage          = folderGrpcObject.folderPackage;
    return  new folderPackage.folderService(process.env.GRPC_HOST , 
                                                grpc.credentials.createInsecure());
}


module.exports              = grpcFolderclient;