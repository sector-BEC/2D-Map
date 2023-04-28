// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class quit_from_system_resp {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):quit_from_system_resp {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsquit_from_system_resp(bb:flatbuffers.ByteBuffer, obj?:quit_from_system_resp):quit_from_system_resp {
  return (obj || new quit_from_system_resp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsquit_from_system_resp(bb:flatbuffers.ByteBuffer, obj?:quit_from_system_resp):quit_from_system_resp {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new quit_from_system_resp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 *Статус, true если нет ошибок
 */
status():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : true;
}

/**
 *Некорректный запрос
 */
incorrectRequest():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 *Внутрення ошибка ПМ Брокер сообщений, дальнейшая работа невозможна
 */
internalError():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startquit_from_system_resp(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addStatus(builder:flatbuffers.Builder, status:boolean) {
  builder.addFieldInt8(0, +status, +true);
}

static addIncorrectRequest(builder:flatbuffers.Builder, incorrectRequest:boolean) {
  builder.addFieldInt8(1, +incorrectRequest, +false);
}

static addInternalError(builder:flatbuffers.Builder, internalError:boolean) {
  builder.addFieldInt8(2, +internalError, +false);
}

static endquit_from_system_resp(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createquit_from_system_resp(builder:flatbuffers.Builder, status:boolean, incorrectRequest:boolean, internalError:boolean):flatbuffers.Offset {
  quit_from_system_resp.startquit_from_system_resp(builder);
  quit_from_system_resp.addStatus(builder, status);
  quit_from_system_resp.addIncorrectRequest(builder, incorrectRequest);
  quit_from_system_resp.addInternalError(builder, internalError);
  return quit_from_system_resp.endquit_from_system_resp(builder);
}

unpack(): quit_from_system_respT {
  return new quit_from_system_respT(
    this.status(),
    this.incorrectRequest(),
    this.internalError()
  );
}


unpackTo(_o: quit_from_system_respT): void {
  _o.status = this.status();
  _o.incorrectRequest = this.incorrectRequest();
  _o.internalError = this.internalError();
}
}

export class quit_from_system_respT {
constructor(
  public status: boolean = true,
  public incorrectRequest: boolean = false,
  public internalError: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return quit_from_system_resp.createquit_from_system_resp(builder,
    this.status,
    this.incorrectRequest,
    this.internalError
  );
}
}