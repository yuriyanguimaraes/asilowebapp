import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Noticia } from 'src/app/shared/models/noticia.model';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-noticia',
  templateUrl: './create-noticia.component.html',
  styleUrls: ['./create-noticia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateNoticiaComponent implements OnInit {

  private noticiaForm: FormGroup

  constructor(
    public noticiaService: NoticiaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.noticiaForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descricao: ['',[Validators.required]],
      imagem: null,
      status: true,
      date: this.dataHoje()
    })
  }

  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '10rem',
    minHeight: '8rem',
    width: '90%',
    imageEndPoint: false,
    translate: false,
    placeholder: 'Informe a descrição!',
    toolbar:  [ 
                ['bold', 'italic', 'underline', 'strikeThrough'],
                [],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
                ['delete', 'removeFormat'], 
                ['paragraph', 'blockquote', 'removeBlockquote', 'orderedList', 'unorderedList']
              ]
  };

  postNoticia(form: Noticia){
    this.noticiaService.postNoticia(form).subscribe(res =>{
      this.router.navigate(['/admin/noticias'])
    })
  }

  dataHoje(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    
    return [ano, mes, dia].join('/');
  }

  get titulo() { return this.noticiaForm.get('titulo')}

  get descricao() { return this.noticiaForm.get('descricao')}
  
}
