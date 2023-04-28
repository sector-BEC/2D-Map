// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { sync_mode } from '../../m-b/msg/sync_mode';


export class choose_sync_mode {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):choose_sync_mode {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAschoose_sync_mode(bb:flatbuffers.ByteBuffer, obj?:choose_sync_mode):choose_sync_mode {
  return (obj || new choose_sync_mode()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAschoose_sync_mode(bb:flatbuffers.ByteBuffer, obj?:choose_sync_mode):choose_sync_mode {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new choose_sync_mode()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

mode():sync_mode {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : sync_mode.async;
}

dt():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

startTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startchoose_sync_mode(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addMode(builder:flatbuffers.Builder, mode:sync_mode) {
  builder.addFieldInt8(0, mode, sync_mode.async);
}

static addDt(builder:flatbuffers.Builder, dt:number) {
  builder.addFieldFloat32(1, dt, 0.0);
}

static addStartTime(builder:flatbuffers.Builder, startTime:number) {
  builder.addFieldFloat32(2, startTime, 0.0);
}

static endchoose_sync_mode(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createchoose_sync_mode(builder:flatbuffers.Builder, mode:sync_mode, dt:number, startTime:number):flatbuffers.Offset {
  choose_sync_mode.startchoose_sync_mode(builder);
  choose_sync_mode.addMode(builder, mode);
  choose_sync_mode.addDt(builder, dt);
  choose_sync_mode.addStartTime(builder, startTime);
  return choose_sync_mode.endchoose_sync_mode(builder);
}

unpack(): choose_sync_modeT {
  return new choose_sync_modeT(
    this.mode(),
    this.dt(),
    this.startTime()
  );
}


unpackTo(_o: choose_sync_modeT): void {
  _o.mode = this.mode();
  _o.dt = this.dt();
  _o.startTime = this.startTime();
}
}

export class choose_sync_modeT {
constructor(
  public mode: sync_mode = sync_mode.async,
  public dt: number = 0.0,
  public startTime: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return choose_sync_mode.createchoose_sync_mode(builder,
    this.mode,
    this.dt,
    this.startTime
  );
}
}