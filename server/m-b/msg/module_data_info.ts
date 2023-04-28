// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class module_data_info {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):module_data_info {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsmodule_data_info(bb:flatbuffers.ByteBuffer, obj?:module_data_info):module_data_info {
  return (obj || new module_data_info()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsmodule_data_info(bb:flatbuffers.ByteBuffer, obj?:module_data_info):module_data_info {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new module_data_info()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

moduleName():string|null
moduleName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
moduleName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startmodule_data_info(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addModuleName(builder:flatbuffers.Builder, moduleNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, moduleNameOffset, 0);
}

static endmodule_data_info(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createmodule_data_info(builder:flatbuffers.Builder, moduleNameOffset:flatbuffers.Offset):flatbuffers.Offset {
  module_data_info.startmodule_data_info(builder);
  module_data_info.addModuleName(builder, moduleNameOffset);
  return module_data_info.endmodule_data_info(builder);
}

unpack(): module_data_infoT {
  return new module_data_infoT(
    this.moduleName()
  );
}


unpackTo(_o: module_data_infoT): void {
  _o.moduleName = this.moduleName();
}
}

export class module_data_infoT {
constructor(
  public moduleName: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const moduleName = (this.moduleName !== null ? builder.createString(this.moduleName!) : 0);

  return module_data_info.createmodule_data_info(builder,
    moduleName
  );
}
}