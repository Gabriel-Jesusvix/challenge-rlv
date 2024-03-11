
export type News = {
    id: number;
    tipo: string;
    titulo: string;
    introducao: string;
    data_publicacao: string;
    produto_id: number;
    produtos: string;
    editorias: string;
    imagens: {
      image_intro: string;
      float_intro: string;
      image_intro_alt: string;
      image_intro_caption: string;
      image_fulltext: string;
      float_fulltext: string;
      image_fulltext_alt: string;
      image_fulltext_caption: string;
    };
    produtos_relacionados: string;
    destaque: boolean;
    link: string;

};

