// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class quit_from_system {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):quit_from_system {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsquit_from_system(bb:flatbuffers.ByteBuffer, obj?:quit_from_system):quit_from_system {
  return (obj || new quit_from_system()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsquit_from_system(bb:flatbuffers.ByteBuffer, obj?:quit_from_system):quit_from_system {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new quit_from_system()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 *Всегда true
 */
quit():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : true;
}

static startquit_from_system(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addQuit(builder:flatbuffers.Builder, quit:boolean) {
  builder.addFieldInt8(0, +quit, +true);
}

static endquit_from_system(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createquit_from_system(builder:flatbuffers.Builder, quit:boolean):flatbuffers.Offset {
  quit_from_system.startquit_from_system(builder);
  quit_from_system.addQuit(builder, quit);
  return quit_from_system.endquit_from_system(builder);
}

unpack(): quit_from_systemT {
  return new quit_from_systemT(
    this.quit()
  );
}


unpackTo(_o: quit_from_systemT): void {
  _o.quit = this.quit();
}
}

export class quit_from_systemT {
constructor(
  public quit: boolean = true
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return quit_from_system.createquit_from_system(builder,
    this.quit
  );
}
}