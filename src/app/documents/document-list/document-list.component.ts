import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';


@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']

})

export class DocumentListComponent implements OnInit {
  //event emitter
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

 //array/list of dummy documents
 documents: Document[] =[];

  //inject document srvice
constructor(private documentService: DocumentsService) {

  }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    this.documentService.documentChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    )

  }

}