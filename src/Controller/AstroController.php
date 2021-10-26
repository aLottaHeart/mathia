<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AstroController extends AbstractController
{
    public function list(Request $request): Response
    {
        $img_name = $request->get('img_name') ?: 'intro';

        return $this->render(sprintf('astro/%s.html.twig', $img_name), [
            'img_name' => $img_name
        ]);
    }
}