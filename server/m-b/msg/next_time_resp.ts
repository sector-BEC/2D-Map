// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 *Ответ на запрос о продвижении логического времени
 *Приходит когда глобальное логическое время продвинулось
 *Работа без получения данного ответа считается некорректной
 */
export class next_time_resp {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):next_time_resp {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsnext_time_resp(bb:flatbuffers.ByteBuffer, obj?:next_time_resp):next_time_resp {
  return (obj || new next_time_resp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsnext_time_resp(bb:flatbuffers.ByteBuffer, obj?:next_time_resp):next_time_resp {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new next_time_resp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 *статус, true если нет ошибок
 */
status():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : true;
}

/**
 * некорректный запрос
 */
incorrectRequest():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 *внутрення ошибка ПМ Брокер сообщений, дальнейшая работа невозможна
 */
internalError():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 *Некорректный шаг продвижения времени
 */
incorrectDt():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 *Некорректное логическое время
 */
incorrectTime():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 *ПМ работает не в синхронном режиме
 */
moduleNotSync():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startnext_time_resp(builder:flatbuffers.Builder) {
  builder.startObject(6);
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

static addIncorrectDt(builder:flatbuffers.Builder, incorrectDt:boolean) {
  builder.addFieldInt8(3, +incorrectDt, +false);
}

static addIncorrectTime(builder:flatbuffers.Builder, incorrectTime:boolean) {
  builder.addFieldInt8(4, +incorrectTime, +false);
}

static addModuleNotSync(builder:flatbuffers.Builder, moduleNotSync:boolean) {
  builder.addFieldInt8(5, +moduleNotSync, +false);
}

static endnext_time_resp(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createnext_time_resp(builder:flatbuffers.Builder, status:boolean, incorrectRequest:boolean, internalError:boolean, incorrectDt:boolean, incorrectTime:boolean, moduleNotSync:boolean):flatbuffers.Offset {
  next_time_resp.startnext_time_resp(builder);
  next_time_resp.addStatus(builder, status);
  next_time_resp.addIncorrectRequest(builder, incorrectRequest);
  next_time_resp.addInternalError(builder, internalError);
  next_time_resp.addIncorrectDt(builder, incorrectDt);
  next_time_resp.addIncorrectTime(builder, incorrectTime);
  next_time_resp.addModuleNotSync(builder, moduleNotSync);
  return next_time_resp.endnext_time_resp(builder);
}

unpack(): next_time_respT {
  return new next_time_respT(
    this.status(),
    this.incorrectRequest(),
    this.internalError(),
    this.incorrectDt(),
    this.incorrectTime(),
    this.moduleNotSync()
  );
}


unpackTo(_o: next_time_respT): void {
  _o.status = this.status();
  _o.incorrectRequest = this.incorrectRequest();
  _o.internalError = this.internalError();
  _o.incorrectDt = this.incorrectDt();
  _o.incorrectTime = this.incorrectTime();
  _o.moduleNotSync = this.moduleNotSync();
}
}

export class next_time_respT {
constructor(
  public status: boolean = true,
  public incorrectRequest: boolean = false,
  public internalError: boolean = false,
  public incorrectDt: boolean = false,
  public incorrectTime: boolean = false,
  public moduleNotSync: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return next_time_resp.createnext_time_resp(builder,
    this.status,
    this.incorrectRequest,
    this.internalError,
    this.incorrectDt,
    this.incorrectTime,
    this.moduleNotSync
  );
}
}