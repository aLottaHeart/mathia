<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class AstroController extends AbstractController
{
    public function list(): Response
    {
        return $this->render('astro.html.twig');
    }
}