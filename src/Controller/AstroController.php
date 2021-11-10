<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AstroController extends AbstractController
{
    public function list(Request $request): Response
    {
        return $this->render('astro/astro.html.twig');
    }

    public function starryNight(Request $request): Response
    {
        return $this->render('astro/starry_night/starry_night.html.twig');
    }

    public function signsOfNightSky(Request $request): Response
    {
        return $this->render('astro/sings_of_night_sky/sings_of_night_sky.html.twig');
    }

    public function valleyFog(Request $request): Response
    {
        return $this->render('astro/valley_fog/valley_fog.html.twig');
    }

    public function downloadImage(Request $request): Response
    {
        $file = sprintf('build/astro/%s', $request->get('filename'));

        return $this->file($file);
    }
}