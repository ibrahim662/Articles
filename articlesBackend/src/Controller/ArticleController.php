<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;


/**
 * @Route("/article")
 */
class ArticleController extends AbstractController
{
    /**
     * @Route("/", name="article_index", methods={"GET"})
     */
    public function index(SerializerInterface $serializer): Response
    {
        
        $posts = $this->getDoctrine()
        ->getRepository(Article::class)
        ->findAll();

        $json = $serializer->serialize($posts, 'json');

        $response = new JsonResponse($json, 200, [], true);

        return $response;
    }

    /**
     * @Route("/new", name="article_new", methods={"GET","POST"})
     */
    public function new(Request $request, SerializerInterface $serializer): Response
    {
        $article = new Article();
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        // if ($form->isSubmitted() && $form->isValid()) {
        //     $entityManager = $this->getDoctrine()->getManager();
        //     $entityManager->persist($article);
        //     $entityManager->flush();

        //     return $this->redirectToRoute('article_index', [], Response::HTTP_SEE_OTHER);
        // }

        // return $this->renderForm('article/new.html.twig', [
        //     'article' => $article,
        //     'form' => $form,
        // ]);
        $jsonRecu = $request->getContent();
        $article = $serializer->deserialize($jsonRecu, Article::class, 'json');
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($article);
        $entityManager->flush();
        return $this->json($article, 201, []);

    }

    /**
     * @Route("/{id}", name="article_show", methods={"GET"})
     */
    public function show(Article $article, Request $request, SerializerInterface $serializer, $id): Response
    {
        // return $this->render('article/show.html.twig', [
        //     'article' => $article,
        // ]);
        $posts = $this->getDoctrine()
        ->getRepository(Article::class)
        ->find($id);
    $json = $serializer->serialize($posts, 'json');

    $response = new JsonResponse($json, 200, [], true);

    return $response;
        
    }

    /**
     * @Route("/{id}/edit", name="article_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Article $article): Response
    {
        // $form = $this->createForm(ArticleType::class, $article);
        // $form->handleRequest($request);

        //     $this->getDoctrine()->getManager()->flush();

        //     // return $this->redirectToRoute('article_index', [], Response::HTTP_SEE_OTHER);
        

        // // return $this->renderForm('article/edit.html.twig', [
        // //     'article' => $article,
        // //     'form' => $form,
        // // ]);
        // return $this->json($article, 201, []);
        $data = json_decode($request->getContent(), true);
        $form = $this->createForm(ArticleType::class, $article);
        $form->submit($data);
        $em = $this->getDoctrine()->getManager();
        $em->persist($article);
        $em->flush();
        $response = new JsonResponse($data, 200);
        return $response;

    }

    /**
     * @Route("/{id}", name="article_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Article $article, $id): Response
    {
        // if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->request->get('_token'))) {
        //     $entityManager = $this->getDoctrine()->getManager();
        //     $entityManager->remove($article);
        //     $entityManager->flush();
        // }

        // return $this->json($article, 201, []);
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($article);
        $entityManager->flush();
        return $this->json($article, 201, []);


    }
}
