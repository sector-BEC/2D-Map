// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { type_status } from '../../m-b/msg/type_status';


export class get_module_status {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):get_module_status {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsget_module_status(bb:flatbuffers.ByteBuffer, obj?:get_module_status):get_module_status {
  return (obj || new get_module_status()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsget_module_status(bb:flatbuffers.ByteBuffer, obj?:get_module_status):get_module_status {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new get_module_status()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 *Получить только последнее сообщение или все отправленные
 */
type():type_status {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : type_status.get_last_status_message;
}

/**
 *Название ПМ статус которого нужно получить
 */
moduleName():string|null
moduleName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
moduleName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startget_module_status(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addType(builder:flatbuffers.Builder, type:type_status) {
  builder.addFieldInt8(0, type, type_status.get_last_status_message);
}

static addModuleName(builder:flatbuffers.Builder, moduleNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, moduleNameOffset, 0);
}

static endget_module_status(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // module_name
  return offset;
}

static createget_module_status(builder:flatbuffers.Builder, type:type_status, moduleNameOffset:flatbuffers.Offset):flatbuffers.Offset {
  get_module_status.startget_module_status(builder);
  get_module_status.addType(builder, type);
  get_module_status.addModuleName(builder, moduleNameOffset);
  return get_module_status.endget_module_status(builder);
}

unpack(): get_module_statusT {
  return new get_module_statusT(
    this.type(),
    this.moduleName()
  );
}


unpackTo(_o: get_module_statusT): void {
  _o.type = this.type();
  _o.moduleName = this.moduleName();
}
}

export class get_module_statusT {
constructor(
  public type: type_status = type_status.get_last_status_message,
  public moduleName: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const moduleName = (this.moduleName !== null ? builder.createString(this.moduleName!) : 0);

  return get_module_status.createget_module_status(builder,
    this.type,
    moduleName
  );
}
}