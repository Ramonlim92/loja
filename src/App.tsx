import React, { useState, useEffect } from 'react';
import { PackageSearch, Phone, Mail, Image, MapPin, Flag, MessageCircle, Lock } from 'lucide-react';

interface ProductForm {
  name: string;
  description: string;
  email: string;
  phone: string;
  image: File | null;
}

function App() {
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    description: '',
    email: '',
    phone: '',
    image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirecionar para HTTPS se estiver usando HTTP
  useEffect(() => {
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('description', formData.description);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      if (formData.image) {
        form.append('image', formData.image);
      }

      const response = await fetch('https://getform.io/f/bmdkprxa', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        alert('Produto enviado com sucesso!');
        setFormData({
          name: '',
          description: '',
          email: '',
          phone: '',
          image: null
        });
      } else {
        throw new Error('Erro ao enviar o formulário');
      }
    } catch (error) {
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <header className="bg-white shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative transform hover:scale-105 transition-transform duration-200">
                <div className="absolute -top-1 -left-1">
                  <Flag className="h-6 w-6 text-red-500" />
                </div>
                <PackageSearch className="h-12 w-12 text-primary-600" />
                <div className="absolute -bottom-1 -right-1">
                  <Flag className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text tracking-tight">
                  ImportaUSA
                </h1>
                <p className="text-sm text-secondary-600 font-medium flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-green-600" />
                  Seu elo direto com os Estados Unidos
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+19738203558" 
                className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                <Phone className="h-5 w-5" />
                <span className="font-medium">+1 (973) 820-3558</span>
              </a>
              <a 
                href="https://wa.me/19738203558" 
                className="px-6 py-2.5 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 card-hover">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary-900 mb-3">
              Importação Direta dos EUA
            </h2>
            <p className="text-secondary-600 text-lg">
              Encontre e importe produtos dos Estados Unidos com facilidade e segurança
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-semibold text-secondary-700 mb-2"
              >
                Nome do Produto
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary-200 rounded-xl form-input-focus"
                placeholder="Digite o nome do produto desejado"
              />
            </div>

            <div>
              <label 
                htmlFor="description" 
                className="block text-sm font-semibold text-secondary-700 mb-2"
              >
                Descrição do Produto
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-secondary-200 rounded-xl form-input-focus resize-none"
                placeholder="Descreva as características do produto que você deseja importar"
              />
            </div>

            <div>
              <label 
                htmlFor="image" 
                className="block text-sm font-semibold text-secondary-700 mb-2"
              >
                Imagem do Produto
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-secondary-200 border-dashed rounded-xl hover:border-primary-400 transition-colors duration-200">
                <div className="space-y-2 text-center">
                  <Image className="mx-auto h-12 w-12 text-secondary-400" />
                  <div className="flex text-sm text-secondary-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer bg-white rounded-md font-semibold text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                    >
                      <span>Envie uma imagem</span>
                      <input id="image" name="image" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                    </label>
                    <p className="pl-1">ou arraste e solte</p>
                  </div>
                  <p className="text-xs text-secondary-500">PNG, JPG até 10MB</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-secondary-700 mb-2"
                >
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-xl form-input-focus"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-semibold text-secondary-700 mb-2"
                >
                  Telefone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-xl form-input-focus"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary-600 text-white py-4 px-6 rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] font-semibold flex items-center justify-center space-x-3 shadow-md hover:shadow-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              <PackageSearch className="h-6 w-6" />
              <span className="text-lg">{isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}</span>
            </button>
          </form>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-soft p-8 card-hover">
          <h3 className="text-xl font-bold text-secondary-900 mb-6">Entre em Contato</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-200">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <a href="https://wa.me/19738203558" className="text-secondary-700 hover:text-green-600 font-medium transition-colors duration-200">
                +1 (973) 820-3558
              </a>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors duration-200">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <a href="mailto:contato@importausa.com" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200">
                contato@importausa.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary-50 rounded-full">
                <MapPin className="h-6 w-6 text-secondary-600" />
              </div>
              <span className="text-secondary-700 font-medium">
                Importação direta dos Estados Unidos para o Brasil
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;