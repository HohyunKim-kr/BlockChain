class BoardRow {
  id;
  title;
  content;
  writer;
  created_at;
  hit;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.content = row.content;
    this.writer = row.writer;
    this.created_at = "";
    this.hit = 0;
  }
}

/*
row { 
    id : 1, 
    title : 'asdaf',
    content 'ds'

}
*/
