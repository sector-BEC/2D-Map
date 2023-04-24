// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { handle_type } from '../../m-b/msg/handle_type';


export class request_handle {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):request_handle {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsrequest_handle(bb:flatbuffers.ByteBuffer, obj?:request_handle):request_handle {
  return (obj || new request_handle()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsrequest_handle(bb:flatbuffers.ByteBuffer, obj?:request_handle):request_handle {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new request_handle()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 *Какого типа дескриптор нужно получить
 */
needHandle():handle_type {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : handle_type.struct_handle;
}

/**
 *Название структуры для которой нужен дескриптор
 */
structName():string|null
structName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
structName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 *Название объекта или поля структуры, дескриптор которого необходимо получить
 */
objOrFieldName():string|null
objOrFieldName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
objOrFieldName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startrequest_handle(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addNeedHandle(builder:flatbuffers.Builder, needHandle:handle_type) {
  builder.addFieldInt8(0, needHandle, handle_type.struct_handle);
}

static addStructName(builder:flatbuffers.Builder, structNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, structNameOffset, 0);
}

static addObjOrFieldName(builder:flatbuffers.Builder, objOrFieldNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, objOrFieldNameOffset, 0);
}

static endrequest_handle(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // struct_name
  return offset;
}

static createrequest_handle(builder:flatbuffers.Builder, needHandle:handle_type, structNameOffset:flatbuffers.Offset, objOrFieldNameOffset:flatbuffers.Offset):flatbuffers.Offset {
  request_handle.startrequest_handle(builder);
  request_handle.addNeedHandle(builder, needHandle);
  request_handle.addStructName(builder, structNameOffset);
  request_handle.addObjOrFieldName(builder, objOrFieldNameOffset);
  return request_handle.endrequest_handle(builder);
}

unpack(): request_handleT {
  return new request_handleT(
    this.needHandle(),
    this.structName(),
    this.objOrFieldName()
  );
}


unpackTo(_o: request_handleT): void {
  _o.needHandle = this.needHandle();
  _o.structName = this.structName();
  _o.objOrFieldName = this.objOrFieldName();
}
}

export class request_handleT {
constructor(
  public needHandle: handle_type = handle_type.struct_handle,
  public structName: string|Uint8Array|null = null,
  public objOrFieldName: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const structName = (this.structName !== null ? builder.createString(this.structName!) : 0);
  const objOrFieldName = (this.objOrFieldName !== null ? builder.createString(this.objOrFieldName!) : 0);

  return request_handle.createrequest_handle(builder,
    this.needHandle,
    structName,
    objOrFieldName
  );
}
}
