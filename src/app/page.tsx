'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  const [nome, setNome] = useState('Mundo')
  const [cor, setCor] = useState('blue')
  const [animacao, setAnimacao] = useState(true)
  const [contador, setContador] = useState(0)
  const [mensagem, setMensagem] = useState('')

  const cores = [
    { nome: 'Azul', valor: 'blue', classe: 'from-blue-500 to-purple-600' },
    { nome: 'Verde', valor: 'green', classe: 'from-green-500 to-teal-600' },
    { nome: 'Rosa', valor: 'pink', classe: 'from-pink-500 to-rose-600' },
    { nome: 'Laranja', valor: 'orange', classe: 'from-orange-500 to-red-600' },
    { nome: 'Roxo', valor: 'purple', classe: 'from-purple-500 to-indigo-600' }
  ]

  const corSelecionada = cores.find(c => c.valor === cor)

  useEffect(() => {
    const mensagens = [
      'Bem-vindo ao mundo do desenvolvimento web!',
      'Você está usando Next.js 15 com TypeScript!',
      'Esta é uma aplicação dinâmica e interativa.',
      'Explore todos os recursos disponíveis!',
      'Obrigado por usar o Z.ai!'
    ]
    
    const interval = setInterval(() => {
      setMensagem(mensagens[Math.floor(Math.random() * mensagens.length)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const incrementar = () => setContador(prev => prev + 1)
  const decrementar = () => setContador(prev => Math.max(0, prev - 1))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="relative w-24 h-24">
              <img
                src="/logo.svg"
                alt="Z.ai Logo"
                className={`w-full h-full object-contain ${animacao ? 'animate-bounce' : ''}`}
              />
            </div>
            <div className="text-2xl text-gray-400 dark:text-gray-500">+</div>
            <div className="relative w-32 h-24">
              <img
                src="/ramel-logo.png"
                alt="RAMEL Logo"
                className={`w-full h-full object-contain ${animacao ? 'animate-pulse' : ''}`}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Hello World Dinâmico
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Uma demonstração interativa criada com Next.js 15 e shadcn/ui
          </p>
          <div className="mt-4">
            <Badge variant="outline" className="text-sm">
              RAMEL - TECNOLOGIA E SEGURANÇA
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* RAMEL Brand Card */}
          <Card className="overflow-hidden border-2 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <img
                    src="/ramel-logo.png"
                    alt="RAMEL Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">RAMEL</h2>
                  <p className="text-sm text-blue-700 dark:text-blue-300">TECNOLOGIA E SEGURANÇA</p>
                </div>
              </div>
              <CardDescription className="text-blue-800 dark:text-blue-200">
                Soluções inovadoras em tecnologia e segurança para o seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="bg-white dark:bg-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="font-semibold mb-1">Segurança</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Proteção avançada de dados</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="font-semibold mb-1">Tecnologia</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Soluções modernas e eficientes</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-1">Inovação</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sempre à frente do mercado</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hello World Card */}
          <Card className="overflow-hidden">
            <CardHeader className="text-center pb-8">
              <div className={`inline-block p-1 rounded-lg bg-gradient-to-r ${corSelecionada?.classe} mb-4`}>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
                  <h2 className={`text-3xl md:text-5xl font-bold ${animacao ? 'animate-pulse' : ''}`}>
                    Olá, {nome}!
                  </h2>
                </div>
              </div>
              <CardDescription className="text-lg">
                Mensagem personalizada com efeitos visuais dinâmicos
              </CardDescription>
            </CardHeader>
            <CardContent className="bg-gray-50 dark:bg-gray-800">
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {mensagem || 'Carregando mensagem...'}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Badge variant="secondary">Next.js 15</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">shadcn/ui</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <Tabs defaultValue="personalizacao" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personalização">Personalização</TabsTrigger>
              <TabsTrigger value="interatividade">Interatividade</TabsTrigger>
              <TabsTrigger value="animações">Animações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personalização" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personalize sua experiência</CardTitle>
                  <CardDescription>
                    Altere o nome e as cores para tornar a experiência única
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Seu nome</Label>
                    <Input
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Digite seu nome"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Escolha uma cor</Label>
                    <div className="flex flex-wrap gap-2">
                      {cores.map((c) => (
                        <Button
                          key={c.valor}
                          variant={cor === c.valor ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCor(c.valor)}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${c.classe}`} />
                          {c.nome}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="interatividade" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Elementos Interativos</CardTitle>
                  <CardDescription>
                    Experimente os diferentes componentes interativos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold">
                      Contador: {contador}
                    </div>
                    <div className="flex gap-4 justify-center">
                      <Button onClick={decrementar} variant="outline">
                        Diminuir
                      </Button>
                      <Button onClick={incrementar}>
                        Aumentar
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="animacao">Ativar animações</Label>
                    <Switch
                      id="animacao"
                      checked={animacao}
                      onCheckedChange={setAnimacao}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="animações" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Efeitos Visuais</CardTitle>
                  <CardDescription>
                    Observe as diferentes animações e transições
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg animate-spin"></div>
                      <p className="text-sm">Animação de rotação</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg animate-pulse"></div>
                      <p className="text-sm">Animação de pulso</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg animate-bounce"></div>
                      <p className="text-sm">Animação de salto</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg animate-ping"></div>
                      <p className="text-sm">Animação de ping</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <Card>
            <CardContent className="text-center py-6">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Criado com ❤️ usando Z.ai • Next.js 15 • TypeScript • shadcn/ui
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Em parceria com <span className="font-semibold">RAMEL</span> - TECNOLOGIA E SEGURANÇA
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}